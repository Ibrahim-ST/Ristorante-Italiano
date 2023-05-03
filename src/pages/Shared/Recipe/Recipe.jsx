import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

const Recipe = () => {
  const recipe = useLoaderData();
  console.log(recipe);
  const {
    chef_name,
    chef_picture,
    description,
    likes,
    recipes,
    years_of_experience,
  } = recipe;
  return (
    <Container>
      <Card>
        <Card.Header as="h5" className="text-center btn-custom">
          {chef_name}
        </Card.Header>
        <Card.Img
          variant="top"
          className="w-75 mx-auto py-2 rounded"
          src={chef_picture}
          alt=""
        />
        <Card.Body>
          <div className="text-danger d-flex justify-content-between">
            <p>Likes : {likes}</p>
            <p>Years of Experience : {years_of_experience}</p>
            <p>No of Recipes : {recipes.length}</p>
          </div>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>

      <h3 className="my-4 text-center">Popular Recipe</h3>
      <div className="d-flex ">
        {recipes.map((recipe) => (
          <Card className='w-100'>
            <Card.Header as="h5" className="text-center btn-custom">
              {recipe.recipe_name}
            </Card.Header>

            <Card.Body>
              <div className="">
                <p>Cooking Method : {recipe.cooking_method}</p>
                <p>
                  Ingredients{" "}
                  {recipe.ingredients.map((i) => (
                    <p>{i}</p>
                  ))}
                </p>
              </div>
              <Card.Text>{}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="  d-flex align-items-center justify-content-between">
                <p>Rating : {recipe.rating}</p>
                <p><FaHeart /></p>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Recipe;
