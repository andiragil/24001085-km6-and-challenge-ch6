import UpdateCarComponent from "../../components/UpdateCar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const UpdateCar = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Update</Card.Header>
                    <Card.Body>
                        <UpdateCarComponent />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default UpdateCar;