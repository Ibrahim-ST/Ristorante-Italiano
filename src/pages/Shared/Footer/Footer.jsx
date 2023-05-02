import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 pt-5">
      <footer className="py-4" style={{ backgroundColor: "#000", color: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Ristorante Italiano</h3>
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
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Recipes</a>
                </li>
                <li>
                  <a href="#">Blog</a>
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
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Pinterest</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
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
