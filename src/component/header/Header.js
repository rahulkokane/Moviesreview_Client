import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand href="/" style={{ color: 'gold' }}>
                    <FontAwesomeIcon icon={faVideo} /> Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link custom-link" to="/">Home</NavLink>
                        <NavLink className="nav-link custom-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2 custom-button" style={{ color: 'gold' }}>Login</Button>
                    <Button variant="outline-info" className="me-2 custom-button" style={{ color: 'gold' }}>Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
