import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const from = location.state?.from?.pathname || "/chef/0";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        navigate(from, { replace: true });
        setSuccess("Logged in Successfully");
      })
      .catch((error) => {
        const errMsg = error.message;
        setSuccess("");
        if (errMsg.includes("Error (auth/wrong-password")) {
          setError("Password incorrect");
        } else if (errMsg.includes("auth/user-not-found")) {
          setError("User not found. Please sign up first");
        }

        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-blog py-2">
        <Row className="justify-content-center gx-0" >
          <Col md={3}>
            <div className=" bg py-5 rounded  ">
              <Container className="">
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <div className="text-success text-center">{success}</div>
                  <div className="text-danger">{error}</div>
                  <Button
                    className="w-100 btn-custom"
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                  <SocialLogin></SocialLogin>
                  <br />
                  <Form.Text className="text-secondary">
                    Don't have an account? <Link to="/register">Register</Link>
                  </Form.Text>
                  <Form.Text className="text-success"></Form.Text>
                  <Form.Text className="text-danger"></Form.Text>
                </Form>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Login;
