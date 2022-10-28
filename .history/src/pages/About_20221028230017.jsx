import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Pagination from "../components/pagination";
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "../components/ErrorFallback";
import arrow from "../assets/arrow.png";



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
          <p>More About us here...</p>
          <div>
            <li>
              <Link to="/about/mission">Our Mission</Link><span><img src={arrow} alt="" /></span>
              
            </li>
            <div>
              <Link to="/about/vision">Our Vision<span><img src={arrow} alt="" /></span></Link>
            </div>
          </div>
        </div>

        <div id="right">
          {location.pathname === "/about" ? (
            <div>
              <h2>About Us</h2>
              <p>
                RandomUser is an API providing developers with randomly generated users to be used as 
                placeholders for testing purposes. This makes the tool similar to Lorem Ipsum, but is a placeholder for people 
                instead of text. The API can return multiple results, as well as specify generated user details such as 
                gender, email, image, username, address, title, first and last name, and more.
              </p>
              <button onClick={goHome}>Go Back</button> 


              <div>
                <h3>Error Boundary</h3>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <h3>Error Boundary</h3>
                <Pagination />
              </ErrorBoundary>
              </div>
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

