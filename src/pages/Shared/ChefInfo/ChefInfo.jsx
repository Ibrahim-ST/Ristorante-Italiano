import React from "react";
import { Button, Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import "./ChefInfo.css";
const ChefInfo = ({ recipe }) => {
  const {
    chef_name,
    chef_picture,
    years_of_experience,
    likes,
    description,
    recipes,
    id,
  } = recipe;
  return (
    <>
    
      <CardGroup>
        <Card>
          <Card.Img
            variant="top"
            className="chef-img"
            src={chef_picture}
            alt=""
          />
          <Card.Body>
            <h3>{chef_name}</h3>
            <Card.Text>{description.slice(0, 171)}</Card.Text>
            <h5>Years of experience : {years_of_experience}</h5>
            <h6>No of Recipes: {recipes.length}</h6>
            <h6>Likes: {likes}</h6>
          </Card.Body>
          <Link to={`/recipe/${id}`}>
            <Button className="my-1 w-100 btn-custom">View Recipe</Button>
          </Link>
        </Card>
      </CardGroup>
    </>
  );
};

export default ChefInfo;


/* 
<CardGroup>
        <Card>
          <Card.Img
            variant="top"
            className="chef-img"
            src={chef_picture}
            alt=""
          />
          <Card.Body>
            <h3>{chef_name}</h3>
            <Card.Text>{description.slice(0, 171)}</Card.Text>
            <h5>Years of experience : {years_of_experience}</h5>
            <h6>No of Recipes: {recipes.length}</h6>
            <h6>Likes: {likes}</h6>
          </Card.Body>
          <Link to={`/recipe/${id}`}>
            <Button className="my-1 w-100 btn-custom">View Recipe</Button>
          </Link>
        </Card>
      </CardGroup>
*/