import React from 'react';
import './Photoshop.css';

export default function Photoshop({ background, img, Cardname }) {
    return (
        <>
            <div className="dashcard">
                <div className="imgcard" style={{ background }}>
                    <img src={img} alt={Cardname} />
                </div>
                <div className="cardname">
                    <p>{Cardname}</p>
                </div>
            </div>
        </>
    );
}

