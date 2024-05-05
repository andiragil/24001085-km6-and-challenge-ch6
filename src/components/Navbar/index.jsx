import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { getProfile, logout } from "../../redux/actions/auth";

const NavbarComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        // get user profile if we have token
        dispatch(getProfile());
    }, [dispatch, token]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Binar Car Rental
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {user ? (
                            <>
                                {user?.role === "admin" || user?.role === "superAdmin" && (
                                    <Nav.Link as={Link} to="/profile">
                                        {user?.name}
                                    </Nav.Link>
                                )}
                                {user?.role === "admin" || user?.role === "superAdmin" && (
                                    <Nav.Link as={Link} to="/cars">
                                        Add Cars
                                    </Nav.Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                    <Nav className="ms-auto">
                        {user && (
                            <>
                                <Nav.Link
                                    onClick={() => {
                                        dispatch(logout());
                                        navigate("/login");
                                    }}
                                >
                                    Logout
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;