import React from "react";

function User({ persons }) {
  return (
    <div className="">
      {persons.map((user) => (
        <div key={user.login.uuid} className="usercard">
          <img src={user.picture.medium} alt={user.name.first} />
          <div>
             <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>{user.email}</p>
            <p>
              {user.location.city}, {user.location.country}
            </p>
          </div>
          <div>
            <p>{user.cell}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default User;