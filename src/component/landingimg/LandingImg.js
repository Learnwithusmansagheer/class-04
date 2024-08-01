import React from 'react';
import './LandingImg.css'
const LandingImg = ({ img }) => {
    return (
        <div className="container">
            <img src={img} alt="" />
        </div>
    );
};

export default LandingImg;
