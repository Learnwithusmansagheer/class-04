import React from 'react';
import Fivestar from '../fiveStar/Fivestar';
import Footerimg from '../../assets/images/cardimg.png';
import './AnotherClientsCard.css'


const AnotherClientsCard = ({ para}) => {
    return (
        <div className="raitingCard2" style={{}}>
            <div className="fivestar">
                <Fivestar />
            </div>
            <div className="paragraph">{para}</div>
            <div className="cardfooter">
                <div className="footer_img">
                    <img style={{ width: "50px", height: '50px' }} src={Footerimg} alt="footer" />
                </div>
                <div className="footer-information">
                    <h3>Shine Joshef</h3>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    );
};

export default AnotherClientsCard;
