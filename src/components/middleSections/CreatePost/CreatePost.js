import React from "react";
import "./CreatePost.css";
import userImg from "../../../images/userImg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faHome,
  faPhoneSlash,
  faPhotoVideo,
  faUsers,
  faSmile,
  faCommentDots,
  faBell,
  faCaretSquareDown,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import ShowModal from "../../ShowModal/ShowModal";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (name, postText) => {
      dispatch({
        type: "ADD_COMMENT",
        payload: {
          name,
          postText,
        },
      });
    },
    removePost: (name, postText) => {
      dispatch({
        type: "ADD_REMOVE",
        payload: {
          name,
          postText,
        },
      });
    },
  };
};

const CreatePost = (props) => {
  return (
    <div>
      <div className="createPostUserInput">
        <img className="createPostUser" src={userImg} alt="" />
        <input
        placeholder=" What's on your miend , Swapno ?"
          className="createPostInput"
          type="text"
          name=""
          id=""
          //

          data-toggle="modal"
          data-target="#myModal"
        />
        <hr />
      </div>
      <div className="createPostmuddle">
        <p className="icon ">
          {" "}
          <FontAwesomeIcon icon={faVideo} />
          Live Video
        </p>
        <p className="icon ">
          <FontAwesomeIcon icon={faPhotoVideo} />
          Photo / Video
        </p>
        <p className="icon ">
          <FontAwesomeIcon icon={faSmile} />
          Feelings / Activities
        </p>
      </div>
      <div className="createPostmuddle">
        <p className="icon ">
          {" "}
          <FontAwesomeIcon icon={faVideo} />
          Create room
        </p>
        <img className="createPostUsers" src={userImg} alt="" />
        <img className="createPostUsers" src={userImg} alt="" />
        <img className="createPostUsers" src={userImg} alt="" />
        <img className="createPostUsers" src={userImg} alt="" />
        <img className="createPostUsers" src={userImg} alt="" />
        <img className="createPostUsers" src={userImg} alt="" />
        <img className="createPostUsers" src={userImg} alt="" />
      </div>
      {/* modal */}

      <ShowModal addPost={props.addPost}></ShowModal>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CreatePost);
