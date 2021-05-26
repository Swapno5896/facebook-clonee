import React from "react";
import "./UserPostsCard.css";
import UserPostsComment from "../UserPostsComment/UserPostsComment";
import img from "../../../images/userImg.jpg";
const UserPostsCard = () => {
  return (
    <div className="UserPostsCard-container">
      <div className="UserPostsCard-header">
        <img className="UserPostsCard-User-img" src={img} alt="" />
        <div>
          <p>Swapno mondol</p>
          <p>34 min</p>
        </div>
      </div>
      <div className="UserPostsCard-middle">
        <p>This is our first post, And this is very nice to see this </p>
      </div>

      <div className="UserPostsCard-footer-1">
        <p>10 Like</p>
        <p className="UserPostsCard-footer-1Comment">15 Comment</p>
      </div>
      <hr />
      <div className="UserPostsCard-footer">
        <p>Like</p>
        <p>Comment</p>
        <p>Share</p>
      </div>
      <hr />
      <div>
        <UserPostsComment></UserPostsComment>
      </div>
    </div>
  );
};

export default UserPostsCard;
