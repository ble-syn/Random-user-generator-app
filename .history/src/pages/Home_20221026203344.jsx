import { useReducer } from "react";
import { useGet } from "restful-react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../assets/Search.svg"


function Home() {

  
    return (
      <li key={user.login.uuid}>
        <img src={user.picture.medium} alt={user.name.first} />
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p>{user.email}</p>
        <p>
          {user.location.city}, {user.location.country}
        </p>
      </li>
    );
  });

  return (
    <div className="home-container">
      <div id="left">
        <h1>Hola Amigos</h1>
        <p>welcome to your dashboard, kindly sort through the user base</p>
        <form action="" className="search-input">
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
      
      </div>
    </div>
  );
}

export default Home;