import React from "react";
import { Link } from "react-router-dom";
import swarm from "../assets/swarm.png";

function Navbar() {
    return (
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <img src={swarm} alt="" />
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