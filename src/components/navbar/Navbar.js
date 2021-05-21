import React from "react";
import userNavImg from "../../images/userImg.jpg";
import facebookkImg from "../../images/facebook.jfif";
// import css
import "./NavBar.css";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHome,
  faVideo,
  faHotel,
  faUsers,
  faPlus,
  faCommentDots,
  faBell, 
  faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img
            style={{ width: "50px", borderRadius: "40px" }}
            class="navbar-brand"
            src={facebookkImg}
            alt=""
          />
          <input
          
            style={{ width: "200px", borderRadius: "30px", height: "40px" }}
            type="text"

          />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"> */}
            <div
              style={{ paddingLeft: "20%" }}
              class=" navbar-nav me-auto mb-2 mb-lg-0"
            >
              <p className="icon  icon-middle">
                {" "}
                <FontAwesomeIcon icon={faHome} />
              </p>
              <p className="icon icon-middle">
                {" "}
                <FontAwesomeIcon icon={faVideo} />
              </p>
              <p className="icon icon-middle">
                {" "}
                <FontAwesomeIcon icon={faHotel} />
              </p>
              <p className="icon icon-middle">
                {" "}
                <FontAwesomeIcon icon={faHotel} />
              </p>
              <p className="icon icon-middle">
                {" "}
                <FontAwesomeIcon icon={faUsers} />
              </p>
            </div>
            {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
              </li> */}
            {/* </ul> */}
            <form class="d-flex">
              <img className="user-nav-img" src={userNavImg} alt="" />
              <p className='nav-use-name'>
                Swapno
              </p>
              <p className="icon icon-right">
                {" "}
                <FontAwesomeIcon icon={faPlus} />
              </p>
              <p className="icon icon-right">
                {" "}
                <FontAwesomeIcon icon={faCommentDots} />
              </p>
              <p className="icon icon-right">
                {" "}
                <FontAwesomeIcon icon={faBell} />
              </p>
              <p className="icon icon-right">
                {" "}
                <FontAwesomeIcon icon={faCaretSquareDown} />
              </p>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
