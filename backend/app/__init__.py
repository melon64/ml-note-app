from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS, cross_origin

import datetime
import hashlib
import urllib
from app.config import settings


app = Flask(__name__)

cors = CORS(app)
#app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SECRET_KEY'] = settings.SECRET_KEY
app.config['MONGO_URI'] = "mongodb+srv://admin:" + urllib.parse.quote(settings.MONGO_URI) +"@cluster0.ecbbfco.mongodb.net/?retryWrites=true&w=majority"

jwt = JWTManager(app) 
app.config['JWT_SECRET_KEY'] = settings.JWT_SECRET_KEY
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)

client = MongoClient(app.config['MONGO_URI'])
db = client["mydb"]

users_collection = db["users"]
posts_collection = db["posts"]
groups_collection = db["groups"]



from app import routes