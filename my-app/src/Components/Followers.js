import React from "react";
import "../../src/App.css";

const FollowersCard = props => {
    let data = props;
    return (
    <div className="followersCard">
      {data.followers.map((el, index) => {
        console.log(el);
        return (
            <div className="followersCard">
            <div className="image-wrapper">
            <img width="200" src={el.avatar_url} alt="github user"/>
            </div>
            <div className="textcontent">
            <h2> Username: {el.login}</h2>
            </div>
            </div>
        )
      })}
    </div>
  );
};
export default FollowersCard;