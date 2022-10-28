import { useReducer } from "react";
import { useGet } from "restful-react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../assets/Search.svg"




const initialState = {
  gender: "",
  page: 1,
  nationality: "",
  showCountry: false,
  seed: "Emerald"
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "update/gender": {
      const gender = action.payload;

      // No need to update if the gender is the same
      if (gender === state.gender) {
        return state;
      }

      // Due to the way random api behaves,
      // if the gender changes, the seed has to change
      // https://stackoverflow.com/a/8084248
      const seed = Math.random().toString(36).substring(7);

      return { ...state, gender, seed };
    }

    case "update/nationality": {
      const nationality = action.payload;

      return { ...state, nationality };
    }

    case "view/show-country": {
      const showCountry = action.payload;

      return { ...state, showCountry };
    }

    case "page/next": {
      const { page } = state;
      return { ...state, page: page + 1 };
    }

    case "page/previous": {
      const { page } = state;

      if (page === 1) {
        return state;
      }

      return { ...state, page: page - 1 };
    }

    default:
      throw new Error("Use one of the defined types");
  }
}
function Home() {

  const render = data.map((user) => {
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
      <ul>{render}</ul>
      </div>
    </div>
  );
}

export default Home;