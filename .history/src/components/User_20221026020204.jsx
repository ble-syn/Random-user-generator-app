import { useReducer } from "react";
import { useGet } from "restful-react";

function User() {
    const initialState = {
        gender: "",
        page: 1,
        nationality: "",
        showCountry: false,
        seed: "Emerald"
      };

  return (
    <div>
      <h2>User</h2>
    </div>
  );
}
export default User;