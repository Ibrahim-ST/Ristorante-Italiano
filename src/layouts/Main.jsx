import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../pages/Shared/Banner/Banner';
import Footer from '../pages/Shared/Footer/Footer';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import NewsLetter from '../pages/Shared/NewsLetter/NewsLetter';
import Testimonial from '../pages/Shared/Testimonial/Testimonial';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Outlet></Outlet>
            <NewsLetter></NewsLetter>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Main;