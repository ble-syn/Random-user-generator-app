import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">Bee</Link>
        </div>
        <p>hello</p>

        <div>
            <Link to="/about">Home</Link>
       
            <Link to="/contact">Users</Link>
        </div>
        <div>
            <Link to="/">Contact Us</Link>
        </div>
      </header>
    );
  }
  
  export default Navbar;