import React from "react";
import {useNavigate} from "react-router-dom";

function Contact() {
  const navigate = useNavigate()
  const  goHome =(event) =>{
    event.preventDefault()
    navigate("/")
}
  return (
    <div className="home-container">
      <div id="left">
        <h2>Contact Us</h2>
      </div>
      
      <div id="right">
       <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea> <br />
          <button type="submit">Submit</button>
       </form>
        <button onClick={goHome}>Go Home</button>
      </div>
    </div>
  );
}

export default Contact;
