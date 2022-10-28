import { useReducer } from "react";
import { useGet } from "restful-react";

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

function User() {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const { gender, page, nationality, seed, showCountry } = state;

  const { data, loading} = useGet({
    path: "https://randomuser.me/api/",
    resolve: (users) => users && users.results,
    queryParams: {
      gender,
      nat: nationality,
      page: page,
      seed: seed,
      results: 3,
      country: showCountry
    }
  });

  if (loading) {
    return "Loading";
  }

  const render = data.map((user) => {
    return <li key={user.login.uuid}>
      <img src={user.picture.medium} alt={user.name.first} />
         <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>{user.email}</p>
          <p>
            {user.location.city}, {user.location.country}</p>
    </li>;
  });

  return (
    <>
      <button
        type="button"
        className="btn all-users"
        onClick={() => dispatch({ type: "update/gender", payload: "" })}
      >
        All
      </button>
      <button
        type="button"
        className="btn m-user"
        onClick={() => dispatch({ type: "update/gender", payload: "male" })}
      >
        Male
      </button>
      <button
        type="button"
        className="btn f-user"
        onClick={() => dispatch({ type: "update/gender", payload: "female" })}
      >
        Female
      </button>
      <select
        className="form-control my-select"
        name="country"
        onChange={(e) =>
          dispatch({
            type: "update/nationality",
            payload: e.target.value
          })
        }
      >
        <option value="">All</option>
        <option value="AU">AU</option>
        <option value="BR">BR</option>
        <option value="CA">CA</option>
        <option value="CH">CH</option>
        <option value="DE">DE</option>
        <option value="DK">DK</option>
        <option value="ES">ES</option>
        <option value="FI">FI</option>
        <option value="FR">FR</option>
        <option value="GB">GB</option>
        <option value="IE">IE</option>
        <option value="IR">IR</option>
        <option value="NO">NO</option>
        <option value="NL">NL</option>
        <option value="NZ">NZ</option>
        <option value="TR">TR</option>
        <option value="US">US</option>
      </select>
      <button onClick={() => dispatch({ type: "page/previous" })}>
        Previous
      </button>
      <button onClick={() => dispatch({ type: "page/next" })}>Next</button>

      <ul>{render}</ul>
    </>
  );
}

export default User;

