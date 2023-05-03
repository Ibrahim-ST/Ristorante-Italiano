import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Chef = () => {
  const { id } = useParams();
  const allRecipe = useLoaderData();
  console.log(allRecipe);
  return (
    <Container>
      {id && <h2>Total recipe in this category : {allRecipe.length}</h2>}
      <div className="d-flex gap-2">
        {allRecipe.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe}></Recipe>
        ))}
      </div>
    </Container>
  );
};

export default Chef;
