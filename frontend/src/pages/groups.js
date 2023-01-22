import { useEffect, useState } from 'react';
import { isLoggedIn } from '../utils/auth';
import GroupList from '../components/grouplist';
import axios from 'axios';
const Groups = () => {
    const [groups, setGroups] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/groups/me')
        .then(response => {
            // if(!response.ok) {
            //     throw Error('Could not fetch the data for that resource');
            // }
            setGroups(response.data);
            setIsPending(false);
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('fetch aborted');
            }
            else{
                setError(err.message);
                setIsPending(false);
            }
        });
    }, []);

    if(isLoggedIn()){
        console.log("logged in")
    }else{
       window.location.href = '/login';
    }
    console.log(groups);

    return ( 
        <div>
            <link rel="stylesheet" href="index.css"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=La+Belle+Aurore&display=swap"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"></link>

            <div className="parentcont">
            <div className="searchbarcont">
                <input type="text" className="searchtb" id="search" name="name" placeholder="Search"/>   
            </div>

            <div className="parentgroupcont">
                <div className="headerline">
                    <h1 className="header">My Groups</h1>
                    <button className="morefriends">
                        Add Friend
                    </button>
                </div>

                <div className="indgroups">
                {error && <div>{error}</div>}
                {isPending && <div color="white">Loading...</div>}
                {groups && <GroupList group={groups} />}
                    {/* <div className="groupcont"> 
                        <p className="conttext">Group Name</p>
                        <p className="conttext">Recent Upload</p>
                        <p className="conttext">No. Members</p>
                    </div>
                    <div className="groupcont"> 
                        <p className="conttext">Group Name</p>
                        <p className="conttext">Recent Upload</p>
                        <p className="conttext">No. Members</p>
                    </div>
                    <div className="groupcont"> 
                        <p className="conttext">Group Name</p>
                        <p className="conttext">Recent Upload</p>
                        <p className="conttext">No. Members</p>
                    </div>
                    <div className="groupcont"> 
                        <p className="conttext">Group Name</p>
                        <p className="conttext">Recent Upload</p>
                        <p className="conttext">No. Members</p>
                    </div>
                    <div className="groupcont"> 
                        <p className="conttext">Group Name</p>
                        <p className="conttext">Recent Upload</p>
                        <p className="conttext">No. Members</p>
                    </div> */}
                </div>

            </div>
            </div>
        </div>
     );
}
 
export default Groups;