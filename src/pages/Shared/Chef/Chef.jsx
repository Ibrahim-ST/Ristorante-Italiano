import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import ChefInfo from "../ChefInfo/ChefInfo";
import './Chef.css'
const Chef = () => {
  const { id } = useParams();
  const allRecipe = useLoaderData();
  console.log(allRecipe);
  return (
    <div className="mx-5">
      {id && <h2 className='text-center my-4'>Our Chef</h2>}
      <div className="chef-data">
        {allRecipe.map((recipe) => (
          <ChefInfo key={recipe.id} recipe={recipe}></ChefInfo>
        ))}
      </div>
    </div>
  );
};

export default Chef;
