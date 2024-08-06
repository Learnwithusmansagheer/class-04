import React from 'react';
import './CallLandingimg.css'
import LandingImg from '../landingimg/LandingImg';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
const CallLandingImg = () => {
    const call = [{
        img: image1
    },
    {
        img: image2
    },
    {
        img: image3
    },
    {
        img: image4
    },
    {
        img: image5
    },
    ];

    return (
        <>
        <marquee behavior="fast" direction="right">
        <div className='container'>
            {call.map((container, index) => (
                <LandingImg key={index} img={container.img} />
            ))}
        </div>
        </marquee>
        </>
    );
};

export default CallLandingImg;
