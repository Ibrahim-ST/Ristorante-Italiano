import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './Nav.css'
const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" className='nav-bg'>
      <Container >
        <Navbar.Brand className="text-black" href="/">Ristorante Italiano</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-white">
            <Nav.Link href="/chef/0#chefSection">Chefs</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            
          </Nav>
          <Nav>
            <Link>{user?.email || user?.displayName}</Link>
            {user ? (
              <Button
                variant="secondary"
                className="mx-2"
                onClick={handleLogOut}
              >
                LogOut
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
