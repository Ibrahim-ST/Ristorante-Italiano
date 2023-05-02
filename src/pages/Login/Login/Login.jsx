import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-25 mx-auto bg mt-4 py-4 rounded  ">
      <Container className="">
        <h3>Please Login</h3>
        <Form>
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

          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Don't have an account? <Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
