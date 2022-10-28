import React from "react";
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
        <div>
          
        </div>
      </div>
      <div id="right">
        right
      </div>
    </div>
  );
}

export default Home;