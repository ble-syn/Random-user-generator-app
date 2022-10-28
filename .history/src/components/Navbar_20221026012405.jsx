import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="header">
        <div className="logo">
          <Link to="/">Bee</Link>
        </div>
        

        <div>
            <Link to="/" className="menu">Home</Link>
       
            <Link to="/about" className="menu">About</Link>
        </div>
        <div>
            <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    );
  }
  
export default Navbar;