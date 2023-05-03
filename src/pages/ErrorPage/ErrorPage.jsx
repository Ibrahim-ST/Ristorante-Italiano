import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error);
  return (
    <div className="body">
      <Link to="/" className="primary-btn text-left btn-error ">
        Ristorante Italiano
      </Link>
      <div class="background">
        <div className="  text-center">
          <h2 className="  font-extrabold text-7xl text-red-500">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-blue-700  ">
            {error?.message}
          </p>
        </div>
        <div class="sand"></div>
        <div class="tower">
          <div class="s1"></div>
          <div class="s2"></div>
          <div class="door1"></div>
          <div class="door2"></div>
          <div class="balcony">
            <div class="b1"></div>
            <div class="b2"></div>
            <div class="b3"></div>
            <div class="b4"></div>
            <div class="b5"></div>
            <div class="b6"></div>
            <div class="b7"></div>
            <div class="b8"></div>
            <div class="b9"></div>
          </div>
          <div class="s3"></div>
          <div class="s4"></div>
          <div class="dome"></div>
          <div class="glass"></div>
          <div class="s5"></div>
          <div class="light"></div>
          <div class="sand1"></div>
          <div class="sand2"></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
