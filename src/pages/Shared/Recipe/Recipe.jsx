import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Recipe = () => {
  const [btnDisable, setBtnDisable] = useState(false);

  const recipe = useLoaderData();
  console.log(recipe);
  const {
    chef_name,
    chef_picture,
    description,
    likes,
    recipes,
    years_of_experience,
    id,
  } = recipe;

  const handleFav = () => {
    toast("Added to favorite!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    if(id)
    setBtnDisable(true);
  };
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
          <div className="text-warning d-flex justify-content-evenly">
            <p>Likes : {likes}</p>
            <p>Years of Experience : {years_of_experience}</p>
            <p>No of Recipes : {recipes.length}</p>
          </div>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>

      <h3 className="my-4 text-center">Popular Recipe</h3>
      <div className="d-flex gap-2">
        {recipes.map((recipe) => (
          <Card className="w-100 mb-4">
            <Card.Header as="h5" className="text-center btn-custom">
              {recipe.recipe_name}
            </Card.Header>

            <Card.Body>
              <div className="">
                <img
                  src={recipe?.recipe_img}
                  alt=""
                  className="img-fluid recipeImg w-100 rounded"
                />
                <h5>Cooking Method:</h5>
                <span>{recipe.cooking_method.slice(0, 250)}...</span>
                <h5>Ingredients:</h5>
                <span className="ingredients">
                  {recipe.ingredients.map((i) => (
                    <li>{i}</li>
                  ))}
                </span>
              </div>
              <Card.Text>{}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex align-items-center justify-content-between">
                <div>Rating : {recipe.rating}</div>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={recipe.rating}
                  readOnly
                />
                <Button
                  variant="warning"
                  onClick={handleFav}
                  disabled={btnDisable}
                >
                  <FaHeart />
                </Button>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
};

export default Recipe;
