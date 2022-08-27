import React from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header() {
  // Using useNavigate hook to move to another page
  const navigate = useNavigate();

  function logOut(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link to="/">Akvelon Logo</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Button className="ms-3" variant="light" onClick={logOut}>
            Log Out
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
