import {Nav, Navbar, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

import "./Header.css";

const Header = () => {
    return (
        <div className="nav-container">
                <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
                    <Container className="d-flex justify-content-around">
                        <Navbar.Brand className="nav-brand" href="/" >
                            <b>Rohan Kumar</b>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <a className="navLink" href="#about-me">About</a>
                                <a className="navLink" href="#projects">Projects</a>
                                <a className="navLink" href="#CV">CV</a>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;

