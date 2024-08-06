import React from 'react';
import './Footer.css'
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instgram.png';
import twitter from '../../assets/images/twiter.png';
import youtube from '../../assets/images/youtube.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="subfooter">
          <h3>Techloset Solutions</h3>
          <p>Your very own Technology <br /> Closet!</p>
        </div>
        <div className="subfooter">
          <h3>Who we are</h3>
          <p>
            About us <br />
            Client & Partners <br />
            Team TechloSet <br />
            Life at TechloSet <br />
            Hire us <br />
            Events
          </p>
        </div>
        <div className="subfooter">
          <h3>Insight</h3>
          <p>
            Our Cases <br />
            Careers <br />
            Awards & Achievements <br />
            Testimonials <br />
            Blog
          </p>
        </div>
        <div className="subfooter">
          <h3>Services</h3>
          <p>
            Mobile App Development <br />
            Web App Development<br />
            AI Service<br />
            Blockchain Solutions<br />
            SaaS Products<br />
            DevOps Service
          </p>
        </div>
        <div className="subfooter">
          <h3>Social</h3>
          <div className="footerimg">
            <div className="facebook">
            <img src={facebook} alt="Facebook" />
            </div>
            <div className="instagram">
            <img id="instagram" src={instagram} alt="Instagram" />
            </div>
            <div className="twitter">
            <img id="twitter" src={twitter} alt="Twitter" />
            </div>
          <div className="youtube"> <img id="youtube" src={youtube} alt="YouTube" /></div>
           
          </div>
        </div>
      
      </div>
     
      <h4 id="footercopy">©2024 Techloset.com | All Rights Reserved</h4>
    </footer>
  );
}
