import React from "react";
import "../../src/App.css";

const UserCard = props => {
    console.log(props)
  return (
    <div className="userCard">
      <div className="image-wrapper">
        <img width="200" src={props.user.avatar_url} alt="github user" />
      </div>
      <div className="textcontent">
      <h2> Username: {props.user.login}</h2>
      <h4> Name: {props.user.name}</h4>
      <h4> Location: {props.user.location}</h4>
      <p>followers: {props.user.followers}</p>
      <p>following: {props.user.following}</p>
      </div>
    </div>
  );
};

export default UserCard;