import { Link } from 'react-router-dom';
const GroupList = ({group}) => {
    return (
        <div className="grouplist">
            {group.map((grp) => (
                <Link to={`/groups/${grp._id.$oid}`}>
                    <div className="groupcont" key={grp.id}>
                        <p className="conttext">Group name: {grp.name}</p>
                        <p className="conttext">{grp.posts[grp.id]}</p>
                        <p className="conttext">Number of members in group: {grp.members.length}</p>
                        <p className="conttext">Members: {grp.members}</p>
                    </div>
                </Link>))}
        </div>
    );
}
 
export default GroupList;