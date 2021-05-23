import React from "react";
import "./Header.css";
import useImg from '../../../images/userImg.jpg'
const Header = () => {
  return (
    <div>
      
      <img src={useImg} alt="" className="header-img" />
      <img src={useImg} alt="" className="header-img" />
      <img src={useImg} alt="" className="header-img" />
      <img src={useImg} alt="" className="header-img" />
    </div>
  );
};

export default Header;
