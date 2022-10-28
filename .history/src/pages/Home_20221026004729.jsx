import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../assets/Search.svg"

function Home() {
  return (
    <div className="home-container">
      <div id="left">
        <h2>Hola Amigos</h2>
        <p>welcome to your dashboard, kindly sort through the user base</p>
        <form action="">
          <Search />
          <input type="text" name="" id="" />
        </form>
        <h3>Show Users</h3>
        <div className="nav-btn-cont">
          <Link className="nav-btn nav-login" to="/login">Login</Link>
          <Link className="nav-btn" to="/register">Sign Up</Link>
          <Link className="nav-btn" to="/about">About</Link>
        </div> 
      </div>
      <div id="right">
        right
      </div>
    </div>
  );
}

export default Home;