import React, { useState } from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Register.css";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] =useState('');
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo_url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo_url, email, password);

        if(password.length< 6 ){
          setError('Password should be at least 6 digits');
          return;
        }
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            alert('Created');
            setError('');
            setSuccess('User created Successfully');

        })
        .catch(error => {
            const errMsg = error.message;
            setSuccess('');
            if(errMsg.includes('auth/email-already-in-use')){
                setError('This user already exists');
                
            }
            console.log(error.message);
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
            placeholder="Enter Your Name"
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
            defaultValue="https://i.ibb.co/M9ZxLQS/Ibrahim-S-Tanvir.jpg"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter your Password"
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
        <div className="text-success text-center">
        {success}
        </div>
        <div className="text-danger">
        {error}
        </div>
        <Button className='w-100' variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <div>
          <SocialLogin></SocialLogin>
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
