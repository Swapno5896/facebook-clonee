import React from 'react';
import './ContactCard.css'
import img from '../../../images/userImg.jpg'
const ContactCard = (props) => {
    return (
        <div className='ContactCard-container'>
            <img className='ContactCard-img' src={img} alt="" />
            <p className='ContactCard-text'>Swapno mondol</p>
        </div>
    );
};

export default ContactCard;