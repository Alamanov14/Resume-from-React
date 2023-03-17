import React from "react";
import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const linkStyle = { textDecoration: "none" };
const Header = () => {
  return (
    <div className="nav-div">
      <Navbar className="nav-start" variant="dark">
        <Navbar.Brand className="logo">Resume</Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Link to="/" style={linkStyle}>
              <NavbarBrand>Home</NavbarBrand>
            </Link>
            <Link to="/1" style={linkStyle}>
              <NavbarBrand>About me</NavbarBrand>
            </Link>
            <Link to="/2" style={linkStyle}>
              <NavbarBrand>Skills</NavbarBrand>
            </Link>
            <Link to="/3" style={linkStyle}>
              <NavbarBrand>Education</NavbarBrand>
            </Link>
            <Link to="/4" style={linkStyle}>
              <NavbarBrand>Portfolio</NavbarBrand>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
