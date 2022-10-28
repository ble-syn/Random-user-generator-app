import React from "react";

function User({ currentUsers }) {
  return (
    <div className="">
      {currentUsers.map((user) => (
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

        </div>
      ))}
    </div>
  );
}

export default User;