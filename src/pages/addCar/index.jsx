import AddCarComponent from "../../components/AddCar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const AddCar = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>AddCar</Card.Header>
                    <Card.Body>
                        <AddCarComponent />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default AddCar;