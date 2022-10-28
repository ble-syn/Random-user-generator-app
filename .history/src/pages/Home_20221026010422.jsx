import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../assets/Search.svg"

function Home() {
  return (
    <div className="home-container">
      <div id="left">
        <h2>Hola Amigos</h2>
        <p>welcome to your dashboard, kindly sort through the user base</p>
        <form action="" className="search-input"">
          <Search />
          <input type="text" name="" id="" />
        </form>
        <h3>Show Users</h3>
        <div className="user-link-cont">
          <Link className="user-link all-user" to="/login">All Users</Link>
          <Link className="user-link female-user" to="/register">Female</Link>
          <Link className="user-link male-user" to="/about">Male</Link>
        </div> 
      </div>
      <div id="right">
        right
      </div>
    </div>
  );
}

export default Home;