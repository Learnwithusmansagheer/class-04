import React from 'react'
import './CaseStudyCard.css'
function CaseStudyCard({ backgroundColor, backgroundColor1, image1, image2, heading, paragraph }) {
    return (<>
    
        <div className="mian_settingSection">
      <div className="main_studyCard" style={{ backgroundColor }}>
        <div className="img_section" style={{ backgroundColor: backgroundColor1 }}>
          <img id='laptopimg1' src={image1} alt="" />
          <img id='mobileimg1' src={image2} alt="" />
        </div>
      
      </div>
      <div className="content_section">
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
      </>
    );
  }
  
  export default CaseStudyCard;
