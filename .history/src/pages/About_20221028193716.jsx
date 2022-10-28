import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Pagination from "../components/pagination";
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "../components/ErrorFallback";


function About() {
  const location = useLocation();
 
  const navigate = useNavigate()
  const  goHome =(event) =>{
    event.preventDefault()
    navigate("/")
  }
  return (
    <div>
      <div className="home-container">
        <div id="left">
          <Navbar />
          <h2>About Page</h2>
          <ul>
            <li>
              <Link to="/about/mission">Our Mission</Link>
            </li>
            <li>
              <Link to="/about/vision">Our Vision</Link>
            </li>
          </ul>
        </div>

        <div id="right">
          {location.pathname === "/about" ? (
            <div>
              <h2>About Us</h2>
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
              <button onClick={goHome}>Go Back</button>

              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <h3>Error Boundary</h3>
                <Pagination />
              </ErrorBoundary>
            </div>
          ) : (
            <Outlet />
          )}
        </div>
        
       </div>
    </div>
  );
}

export default About;

