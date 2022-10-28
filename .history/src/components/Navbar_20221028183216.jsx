import React from "react";
import { Link } from "react-router-dom";
import bee from "../assets/bee.png";

function Navbar() {
    return (
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <img src="" alt="" />
          Home</Link>
        </div>
        

        <div>
            <Link to="/about" className="menu">About</Link>
        </div>
        <div>
            <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    );
  }
  
export default Navbar;