import { Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../redux/actions/car";
import Protected from "../Protected";

const CarCard = ({ car }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this car?")) {
            dispatch(deleteCar(id, navigate));
        }
    };
    return (
        <Col md={4}>
            <Card>
                <Card.Header>{car?.name}</Card.Header>
                <Card.Body>
                    {car?.image && (
                        <Image
                            src={car?.image}
                            className="img-fluid"
                            rounded
                        />
                    )}

                    <div className={car?.image && "mt-4"}>
                        <h5>{car?.name}</h5>
                        <p>{car?.detail?.type}</p>
                        <p>Rp {car?.rentPerDay} /day</p>
                        <Link to={`/cars/${car?.id}`}>
                            <Button variant="primary" className="me-2">View Details</Button>
                        </Link>
                        <Protected roles={["admin", "superAdmin"]}>
                            <Link to={`/cars/update/${car?.id}`}>
                                <Button variant="secondary" className="me-2">Update</Button>
                            </Link>
                            <Link>
                                <Button variant="danger" onClick={() => handleDelete(car.id)}>Delete</Button>
                            </Link>
                        </Protected>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

CarCard.propTypes = {
    car: PropTypes.object,
};

export default CarCard;