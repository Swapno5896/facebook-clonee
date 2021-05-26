import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faSearch,
  faVideo,
  faHotel,
  faUsers,
  faPlus,
  faCommentDots,
  faBell,
  faCaretSquareDown,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import ContactCard from "../ContactCard/ContactCard";
import img from "../../../images/userImg.jpg";
const Contacts = () => {
  const contactss = [
    { name: "swapno", img: img },
    { name: "swapno", img: img },
    { name: "swapno", img: img },
    { name: "swapno", img: img },
    { name: "swapno", img: img },
    { name: "swapno", img: img },
    { name: "swapno", img: img },
    { name: "swapno", img: img }
  ];
  return (
    <div>
      <p>
        Contacts
        <span className="contack-icon first-contack-icon">
          <FontAwesomeIcon icon={faVideo} />
        </span>
        <span className="contack-icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <span className="contack-icon">
          <FontAwesomeIcon icon={faEllipsisH} />
        </span>
      </p>
    
      <ContactCard></ContactCard>
    </div>
  );
};

export default Contacts;
