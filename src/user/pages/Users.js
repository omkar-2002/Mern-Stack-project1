import React from 'react';
import UserList from '../components/UserList';
import "./Users.css";
const Users = () => {
  const USERS = [{
    id: "u1",
    name: "Omkar Salapurkar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCl36Iw1YOG1ryHbocdtJE7ElUOxuvpqwjuA&usqp=CAU",
    placeCount: 3
  }]

  return <UserList items = {USERS}/>


};

export default Users;
