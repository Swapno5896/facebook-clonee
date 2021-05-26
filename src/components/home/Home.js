import React from "react";
import './Home.css'
import LeftSidebar from "../left-sidebar/LeftSidebar";
import MiddleSection from "../middle-section/MiddleSection";
import Navbar from "../navbar/Navbar";
import RightSidebar from "../right-sidebar/RightSidebar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div class="row">
        <div class="col-md-3 ">
          <LeftSidebar></LeftSidebar>
        </div>
        <div style={{marginLeft:"78px"}} class="col-md-5 ">
          <MiddleSection></MiddleSection>
        </div>
        <div class="col-md-3 rightSidebar">
          <RightSidebar></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default Home;
