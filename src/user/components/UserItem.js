import React from "react";
import "./UserItem.css"

const UserItem = props =>{
  
return <div className="container">
<img className="proimg" src= {props.image} />
<div className="aboutme">
    <h3 className="name">{props.name}</h3>
    <h3>{props.placeCount} Places</h3>
</div>
</div>
}


export default UserItem;