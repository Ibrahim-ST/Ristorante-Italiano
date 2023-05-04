import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div className="">
      <footer className="py-4" style={{ backgroundColor: "#1D2641", color: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="title">Ristorante Italiano</h1>
              <p>
                We are a team of food enthusiasts who love to share our favorite
                recipes with others. Our goal is to provide you with delicious
                and easy-to-follow recipes that you can enjoy at home.
              </p>
            </div>
            <div className="col-md-3">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="#">Recipes</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Connect With Us</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/ibrahim.siddiqueee">Facebook</a>
                </li>
                <li>
                  <a href="https://github.com/Ibrahim-ST">GitHub</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/__witchfinder_general__/">Instagram</a>
                </li>
                 
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className='text-center'>
                &copy; {new Date().getFullYear()} Foodie Recipes. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
