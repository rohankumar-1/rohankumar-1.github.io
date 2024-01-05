
import Card from "react-bootstrap/Card";
import "./Project.css";

const /* name */ = () => {
    return (
        <Card className="proj">
            <Card.Title className="proj-title">{/*Title here*/}</Card.Title>
            <div className="proj-date">{/* data here */}</div>
            <hr></hr>

            <div className="img-container">
                <Card.Img className="proj-image" src={/* fill image source here, import it*/} variant="top"/>
            </div>
            <Card.Body>
                <Card.Text className="proj-text">
                    {/* body text here */}
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Link className="proj-link" href={/* link to project here*/}>Repository</Card.Link>
                        <div>
                            {/* shields here from devicon.com */}
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default /* name */;