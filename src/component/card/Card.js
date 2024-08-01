// Card.js
import React from 'react';
import './Card.css'
const Card = ({ img, heading, paragraph, iconBackground }) => {
  return (
    <div className="card">
      <div className="img" style={{ backgroundColor: iconBackground }}>
        <img src={img} alt={heading} className="card-img" />
      </div>
      <div className="info">
        <h2>{heading}</h2>
        <p style={{ fontSize: "16px" }}>{paragraph}</p>

      </div>
    </div>
  );
};

export default Card;

