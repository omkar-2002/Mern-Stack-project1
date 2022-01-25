import React from "react";
import "./UserList.css";
import UserItem from "./UserItem";


const UserList = (props) => {
    
  if (props.items.lenght == 0) {
    return (
      <div className="center">
        <h1>Sorry no user found!</h1>
      </div>
    );
  } else {
    return (
      <ul className="userList">
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            placeCount={user.placeCount}
            image={user.image}
          />
        ))}
      </ul>
    );
  }
};

export default UserList;
