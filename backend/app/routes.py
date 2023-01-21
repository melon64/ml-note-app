from app import app
from flask import Flask, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from bson.objectid import ObjectId
from bson import json_util
from bson.json_util import loads, dumps
import json
import hashlib
from app import users_collection, groups_collection, posts_collection
import openai
from app.config import settings
from app import nlp


openai.api_key = settings.OPENAI_API_KEY

@app.route('/')
def index():
    return 'Hello World!'

def parse_json(data):
    return json.loads(json_util.dumps(data))

@app.route("/api/v1/users", methods=["POST"])
def register():
    new_user = request.get_json()
    new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest() 
    new_user["groups"] = []
    doc = users_collection.find_one({"username": new_user["username"]})
    if not doc:
        users_collection.insert_one(new_user)
        return jsonify({'msg': 'User created successfully'}), 201
    else:
        return jsonify({'msg': 'Username already exists'}), 409

@app.route("/api/v1/login", methods=["POST"])
def login():
    login_details = request.get_json() 
    user_from_db = users_collection.find_one({'username': login_details['username']}) 
    if user_from_db:
        encrpted_password = hashlib.sha256(login_details['password'].encode("utf-8")).hexdigest()
        if encrpted_password == user_from_db['password']:
            access_token = create_access_token(identity=user_from_db['username'])
            return jsonify(access_token=access_token), 200
    return jsonify({'msg': 'The username or password is incorrect'}), 401

#refresh token endpoint
@app.route("/api/v1/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user)
    return jsonify(access_token=access_token), 200

@app.route("/api/v1/me", methods=["GET"])
@jwt_required()
def get_current_user():
    user = users_collection.find_one({"username": get_jwt_identity()})
    if user:
        return parse_json(user), 200
    else:
        return jsonify({'msg': 'User not found'}), 404

#create group endpoint
@app.route("/api/v1/groups", methods=["POST"])
@jwt_required()
def create_group():
    new_group = request.get_json()
    new_group["name"] = new_group["name"]
    #set group id to the largest group id that has been created + 1
    if groups_collection.count_documents({}) == 0:
        new_group["id"] = 1
    else:
        new_group["id"] = groups_collection.find().sort("id", -1).limit(1)[0]["id"] + 1
    new_group["members"] = [get_jwt_identity()]
    new_group["posts"] = []
    groups_collection.insert_one(new_group)
    #get the inserted group
    new_group = groups_collection.find_one({"id": new_group["id"]})
    users_collection.update_one({"username": get_jwt_identity()}, {"$push": {"groups": new_group["_id"]}})

    return jsonify({'msg': 'Group created successfully'}), 201

@app.route("/api/v1/groups/<group_id>", methods=["GET"])
@jwt_required()
def get_group(group_id):
    group = groups_collection.find_one({"_id": ObjectId(group_id)})
    if group:
        if get_jwt_identity() in group["members"]:
            return parse_json(group), 200
        else:
            return jsonify({'msg': 'You are not a member of this group'}), 401
    else:
        return jsonify({'msg': 'Group not found'}), 404

#add member to group
@app.route("/api/v1/groups/<group_id>/members", methods=["POST"])
@jwt_required()
def add_member(group_id):
    new_member = request.get_json()
    group = groups_collection.find_one({"_id": ObjectId(group_id)})
    if group:
        if get_jwt_identity() in group["members"]:
            if new_member["username"] in group["members"]:
                return jsonify({'msg': 'User is already a member of this group'}), 409
            else:
                groups_collection.update_one({"_id": ObjectId(group_id)}, {"$push": {"members": new_member["username"]}})
                users_collection.update_one({"username": new_member["username"]}, {"$push": {"groups": group_id}})
                return jsonify({'msg': 'Member added successfully'}), 201
        else:
            return jsonify({'msg': 'You are not a member of this group'}), 401
    else:
        return jsonify({'msg': 'Group not found'}), 404

#show all groups that current user is a member of
@app.route("/api/v1/groups/me", methods=["GET"])
@jwt_required()
def get_my_groups():
    groups = groups_collection.find({"members": get_jwt_identity()})
    if groups:
        return parse_json(groups), 200
    else:
        return jsonify({'msg': 'No groups found'}), 404


#get all groups
@app.route("/api/v1/groups", methods=["GET"])
@jwt_required()
def get_groups():
    groups = groups_collection.find()
    if groups:
        return parse_json(groups), 200
    else:
        return jsonify({'msg': 'No groups found'}), 404

#create post with image endpoint
@app.route("/api/v1/posts", methods=["POST"])
@jwt_required()
def create_post():
    new_post = request.get_json()
    new_post["author"] = get_jwt_identity()
    new_post["content"] = new_post["content"]
    new_post["image"] = new_post["image"]
    new_post["tags"] = new_post["tags"]
    
    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=nlp.generate_prompt(new_post["content"]),
            temperature=0.6,
            max_tokens=1000,
        )

    new_post["suggestions"] = response["choices"][0]["text"].split(",")
    posts_collection.insert_one(new_post)
    print(response)

    for group in users_collection.find_one({"username": get_jwt_identity()})["groups"]:
        groups_collection.update_one({"_id": group }, {"$push": {"posts": new_post["_id"]}})
    return jsonify({'msg': 'Post created successfully'}), 201

@app.route("/api/v1/users/<username>", methods=["GET"])
def get_user(username):
    doc = users_collection.find_one({"username": username})
    if doc:
        return parse_json(doc), 200
    else:
        return jsonify({'msg': 'User not found'}), 404
