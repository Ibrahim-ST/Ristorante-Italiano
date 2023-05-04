import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import ChefInfo from "../ChefInfo/ChefInfo";
import './Chef.css'
import { Card, Col, Row } from 'react-bootstrap';

const Chef = () => {
  const { id } = useParams();
  const allRecipe = useLoaderData(); 
  return (
    <div className="mx-5" id="chefSection">
      {id && <h2 className='text-center my-4'>Our Chef</h2>}
      <Row xs={1} md={2} lg={3} className="g-4">
        {allRecipe.map((recipe) => (
          <ChefInfo key={recipe.id} recipe={recipe}></ChefInfo>
        ))}
      </Row>
    </div>
  );
};

export default Chef;
