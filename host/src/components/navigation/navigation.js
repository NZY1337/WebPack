import React, { useState, useRef } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../public/images/cabify-vector-logo.svg";

function Navigation() {
  const [links, setLinks] = useState([
    {
      name: "Home",
      url: "/",
      id: 0,
    },
    {
      name: "Users",
      url: "/users",
      id: 1,
    },
    // {
    //   name: "Sparta",
    //   url: "/asd",
    // },
  ]);

  const renderLinks = () => {
    return links.map((link) => {
      return (
        <Nav.Link as={Link} to={link.url} key={link.id}>
          {link.name}
        </Nav.Link>
      );
    });
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="py-0" style={{ height: "50px" }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} style={{ width: "50px", marginTop: "10px", height: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              {renderLinks()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
