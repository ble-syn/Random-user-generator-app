import React from "react";
import { useNavigate} from "react-router-dom";


function Mission() {
  const navigate = useNavigate()
  const  goback =(event) =>{
    event.preventDefault()
    navigate("/about")

  }
  return (
    <div>
      <h2> Our Mission</h2>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus praesentium consequuntur velit harum impedit reiciendis
          reprehenderit itaque sed, modi, nostrum laboriosam at quos! Inventore
          officia incidunt minus, dolorum explicabo laudantium consequuntur
          ipsam qui quasi veniam dolor sunt! Similique dicta nulla voluptatem
          dolore aut veniam voluptatum quaerat. Cum reprehenderit consectetur
          neque labore quasi voluptatibus voluptatem iusto dolores, tempore
          dolore animi assumenda culpa corrupti officia iure soluta numquam
          explicabo nihil aspernatur! Animi, eaque mollitia. Unde tempora nemo
          praesentium, quidem voluptate necessitatibus optio cum magnam, rem
          excepturi nihil adipisci ipsum labore officiis vel voluptatibus atque
          cupiditate accusamus laboriosam expedita placeat consequuntur! Ea,
          fugiat.
        </p>
        <button onClick={goback}>Go Back</button>
      </div>
    </div>
  );
}

export default Mission;
