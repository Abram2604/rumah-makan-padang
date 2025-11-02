import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    Padang Sederhana
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                       <Nav.Link as={NavLink} to="/" 
                    </Nav>
                </Navbar.Collapse>
            </Container>    
        </Navbar>
    )
}