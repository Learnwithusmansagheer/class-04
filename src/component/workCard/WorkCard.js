import React from 'react'
import './WorkCard.css'
export default function WorkCard({image, heading, paragraph}) {
    return (
        <>

            <div class="cardStudy">
                <a class="card1" href="#">
                    <div className="study_img_section">
                        <img style={{width:'30px',height:'20px'}} src={image} alt="" />
                    </div>
                    <div className="content_section">
                        <h1>{heading}</h1>
                        <p class="small">{paragraph}</p>
                    </div>


                </a>
            </div>
        </>
    )
}
