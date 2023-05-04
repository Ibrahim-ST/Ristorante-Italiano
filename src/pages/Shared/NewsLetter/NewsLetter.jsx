import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const NewsLetter = () => {
  return (
    <Container>
      <div className="newsletter t-card p-5 my-5 rounded">
        <h2 className="mb-4 text-center">Subscribe to Our Newsletter for New Recipe</h2>
        <form>
          <div className="input-group mb-3">
            <label htmlFor="email" className="visually-hidden">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-custom">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default NewsLetter;
