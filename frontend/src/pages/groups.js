const Groups = () => {
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
                    </div>
                    <div className="groupcont"> 
                        <p className="conttext">Group Name</p>
                        <p className="conttext">Recent Upload</p>
                        <p className="conttext">No. Members</p>
                    </div>
                </div>

            </div>
            </div>
        </div>
     );
}
 
export default Groups;