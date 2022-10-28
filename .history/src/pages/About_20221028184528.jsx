import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function About() {
  const location = useLocation();

  return (
    <div>
      <div className="home-container">
      
      <div id="left">
        <Navbar />
        
      </div>
      <div id="right">
        <h2>About Page</h2>
      </div>
        <ul>
          <li>
            <Link to="/about/policy">Our Mission</Link>
          </li>
          <li>
            <Link to="/about/terms">Our Vision</Link>
          </li>
        </ul>
      </div>
      {location.pathname === "/about" ? (
        <div>
         
          <p>
            WebsiteName is a Professional WebsiteType Platform. Here we will
            provide you only interesting content, which you will like very much.
            We're dedicated to providing you the best of WebsiteType, with a
            focus on dependability and WebsiteSpeciality. We're working to turn
            our passion for WebsiteType into a booming online website. We hope
            you enjoy our WebsiteType as much as we enjoy offering them to you.
            I will keep posting more important posts on my Website for all of
            you. Please give your support and love.
          </p>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default About;

