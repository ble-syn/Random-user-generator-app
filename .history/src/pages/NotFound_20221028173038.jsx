import React from "react";
import error404 from "../assets/404-error.png"

function NotFound() {
  return <div className="notfound">
    <img src={error404} alt="404 error" />
    <p>Sorry, we couldnt find the page you are Looking for.</p>
  </div>;
}

export default NotFound;
