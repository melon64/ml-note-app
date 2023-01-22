const DocList = ({document}) => {
    return (
        <div className="page">
            {document.map((doc) => (
                <div key={doc.id}>
                    <div className="doc">
                        <div className="fileprev">
                            <img src={`data:image/jpeg;base64,${doc.image}`} alt={doc.id}></img>
                            <h2 className="docdetails">{doc.author}</h2>
                        </div>
                        <div className="detailcontainer">
                            <p className="docdetails">Tag:{doc.tags[0]}</p>
                            <p className="docdetails">Look into:{doc.suggestions}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default DocList;