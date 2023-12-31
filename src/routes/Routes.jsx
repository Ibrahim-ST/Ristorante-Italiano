import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import RecipeLayout from "../layouts/RecipeLayout";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import About from "../pages/Shared/About/About";
import Chef from "../pages/Shared/Chef/Chef";
import Contact from "../pages/Shared/Contact/Contact";
import Recipe from "../pages/Shared/Recipe/Recipe";
import Terms from "../pages/Shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

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
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      } ,
       
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
          fetch(`https://ristorante-italiano-server-ibrahim-st.vercel.app/chef/${params.id}`),
      },
    ],
  },
  {
    path:'/recipe',
    element: <RecipeLayout></RecipeLayout>,
    children: [
        {
            path:':id',
            element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
            loader: ({params}) => fetch(`https://ristorante-italiano-server-ibrahim-st.vercel.app/recipe/${params.id}`)

        }
    ]
  }
]);

export default router;
