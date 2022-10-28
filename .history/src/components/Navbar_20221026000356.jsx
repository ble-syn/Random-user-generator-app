import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">Bee</Link>
        </div>
        

        <div>
            <Link to="/about">Home</Link>
       
            <Link to="/contact">About</Link>
        </div>
        <div>
            <Link to="/">Contact Us</Link>
        </div>
      </header>
    );
  }
  
export default Navbar;