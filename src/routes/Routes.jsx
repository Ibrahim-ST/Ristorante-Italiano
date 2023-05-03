import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import RecipeLayout from "../layouts/RecipeLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Chef from "../pages/Shared/Chef/Chef";
import Recipe from "../pages/Shared/Recipe/Recipe";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to='/chef/0'></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/chef",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <Chef></Chef>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
  {
    path:'/recipe',
    element: <RecipeLayout></RecipeLayout>,
    children: [
        {
            path:':id',
            element: <Recipe></Recipe>,
            loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)

        }
    ]
  }
]);

export default router;
