import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Nav.css";
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
    <Navbar collapseOnSelect expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand className="text-black" href="/">
          Ristorante Italiano
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-white">
            <NavLink to="/chef/0" className="nav-link" activeclassname="active">
              Home
            </NavLink>
            <NavLink to="/blog" className="nav-link" activeclassname="active">
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeclassname="active"
            >
              Contact
            </NavLink>
            <NavLink to="/about" className="nav-link" activeclassname="active">
              About Us
            </NavLink>
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
