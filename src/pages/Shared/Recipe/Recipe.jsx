import React from "react";
import { Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import './Recipe.css'
const Recipe = ({ recipe }) => {
  const { chef_name, chef_picture, years_of_experience, likes } = recipe;
  return (
    < >
      <CardGroup >
        <Card>
          <Card.Img variant="top" className="chef-img" src={chef_picture} alt=""  />
          <Card.Body>
            <Card.Title>{chef_name}</Card.Title>
             
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      
      </CardGroup>
    </>
  );
};

export default Recipe;
