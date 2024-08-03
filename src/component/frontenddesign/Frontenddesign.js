import React from 'react'

export default function Frontenddesign({background , img, Cardname}) {

    return (
        <div className="dashcard">
                <div className="imgcard" style={{ backgroundColor:{background} }}>
                    <img src={img} alt={Cardname} />
                </div>
                <div className="cardname">
                    <p>{Cardname}</p>
                </div>
            </div>
    )
}
