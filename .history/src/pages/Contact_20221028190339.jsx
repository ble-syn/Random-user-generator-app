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
      <h2> Our Mission</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          obcaecati veritatis molestias. Rerum officia ipsa porro, consectetur
          tempora adipisci pariatur laborum ducimus vel provident consequuntur
          molestiae voluptatem praesentium minima. Aliquam laborum dolores
          expedita. Repellat suscipit, veritatis distinctio in officia aperiam
          sed similique veniam sequi nisi quaerat aliquam accusamus, cumque
          tenetur?
        </p>
        <button onClick={goHome}>Go Back</button>
      </div>
    </div>
  );
}

export default Contact;
