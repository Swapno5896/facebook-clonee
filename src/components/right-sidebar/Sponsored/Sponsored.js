import React from "react";
import './Sponsored.css'
import img from "../../../images/userImg.jpg";
const Sponsored = () => {
  return (
    <div>
      <div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img className='sponsored-img' src={img} alt="..." />
          </div>
          <div class="col-md-8">
          <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. 
              </p>
          </div>
        </div>
      </div><div class="card mb-3" style={{ maxWidth: "540px" }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img className='sponsored-img' src={img} alt="..." />
          </div>
          <div class="col-md-8">
          <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. 
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
