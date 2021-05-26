import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faHome,
  faUserFriends,
  faBook,
  faUsers,
  faFileVideo,
  faCalendarAlt,
  faHistory,
  faBookmark,
  faFlag,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import './LeftSidebar.css'
const LeftSidebar = () => {
    return (
        <div>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faHome} /></span>Swapno mondol</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faUserMd} /></span>COVID-19 Information Center</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faUserFriends} /></span>Find Friends</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faBook} /></span>Welcome</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faUsers} /></span>Groups</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faFileVideo} /></span>Watch</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faCalendarAlt} /></span>Events</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faHistory} /></span>Memories</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faBookmark} /></span>Saved</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faFlag} /></span>Pages</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faShoppingBag} /></span>Jobs</p>
           <p className='left-sideBar-text'><span className='left-sideBar-icon'><FontAwesomeIcon icon={faHome} /></span>See more \/</p>

        </div>
    );
};

export default LeftSidebar;