import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
// Impor ikon dari react-icons
import { BsTelephoneFill, BsSearch } from "react-icons/bs";
// Impor file CSS kita
import "./Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom" variant="dark" sticky="top">
      <Container fluid>
        <div className="d-flex align-items-center">
          <Navbar.Brand as={NavLink} to="/">
            <span className="brand-highlight">RM</span> Putri Sulung
          </Navbar.Brand>
          <div className="contact-info d-none d-lg-flex">
            <BsTelephoneFill className="icon" />
            <div>
              <span className="label">Pesan Sekarang</span>
              <span>+62 838-4068-5252</span>
            </div>
          </div>
        </div>
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/product">
              Product
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
            <BsSearch className="search-icon" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
