import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/Shared/Banner/Banner';
import Footer from '../pages/Shared/Footer/Footer';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner>git </Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;