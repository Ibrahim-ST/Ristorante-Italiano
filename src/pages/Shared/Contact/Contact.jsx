import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="py-5 bg-blog">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <h2 className="text-center mb-5">Contact Us</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button className="btn-custom my-2" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
