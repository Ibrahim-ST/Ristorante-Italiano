import React, { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Register.css";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo_url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo_url, email, password);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            alert('Created');
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }
  return (
    <Container className="w-25 mx-auto bg mt-4 py-4 rounded">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            placeholder="Enter photo URL"
            required
            defaultValue="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">terms and conditions</Link>
              </>
            }
            onClick={handleAccepted}
          />
        </Form.Group>
        <Button className='w-100' variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <div>
          <div
            className=" d-flex gap-2 mt-2 px-1"
            role="group"
            aria-label="Button group example"
          >
            <button type="button" className=" btn btn-bg ">
              Sign in with Google
            </button>
            <button type="button" className="btn btn-bg">
            Sign in with GitHub
            </button>
          </div>
        </div>
        <br />
        <Form.Text className="text-secondary">
          Already have an account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
