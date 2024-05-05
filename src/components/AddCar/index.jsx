import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCar } from "../../redux/actions/car";

function AddCar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [detail_id, setDetail] = useState("");
    const [rentPerDay, setRentPerDay] = useState("");
    const [size, setSize] = useState("");
    const [image, setImage] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        // dispatch the register action
        dispatch(
            addCar(navigate, setIsLoading, name, detail_id, rentPerDay, size, image)
        );
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="detail_id">
                <Form.Label>Detail ID *</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter detail ID"
                    value={detail_id}
                    onChange={(e) => setDetail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentPerDay">
                <Form.Label>Rent Per Day *</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter Rent Price"
                    value={rentPerDay}
                    onChange={(e) => setRentPerDay(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="size">
                <Form.Label>Size *</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Size Car"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="image" className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? "Processing..." : "Add Car"}
            </Button>
        </Form>
    );
}

export default AddCar;