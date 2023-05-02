import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import Terms from '../pages/Shared/Terms/Terms';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <></> 
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            }

        ]
    }
])

export default router;