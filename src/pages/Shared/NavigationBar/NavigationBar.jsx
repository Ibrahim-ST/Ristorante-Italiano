import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Nav.css";
import { ToastContainer, toast } from "react-toastify";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log('nav user', user)
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logged out!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const tooltip = <Tooltip>{user?.displayName || user?.email}</Tooltip>;
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
            {user && 
            <OverlayTrigger placement="bottom" overlay={tooltip}>
            {user && (
              <img src={user?.photoURL} alt="" className="profile-img" />
            )}
          </OverlayTrigger>
          }
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Navbar>
  );
};

export default NavigationBar;
