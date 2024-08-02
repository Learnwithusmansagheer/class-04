import React from 'react';
import './DesignCard.css';
import Photoshop from '../photoshop/Photoshop';
import Figmaimg from '../../assets/images/figma.png';
import Illustrator from '../../assets/images/illustrator.png'
import Photoshopimg from '../../assets/images/photoshop.png'
import Xd from '../../assets/images/Xd.png'
import Ziplinimg from '../../assets/images/zipline.png'

export default function DesignCard({ heading }) {
    const Data = [
        {
            background: '#bdf9e2',
            img: Figmaimg,
            Cardname: 'Figma',
        },
        {
            background: '#bde3f9',
            img: Photoshopimg,
            Cardname: 'Photoshop',
        },
        {
            background: 'rgba(251, 216, 174, 1)',
            img: Illustrator,
            Cardname: 'Illustrator',
        },
        {
            background: 'rgba(248, 189, 249, 0.37)',
            img: Xd,
            Cardname: 'Adobe XD',
        },
        {
            background: 'rgba(255, 234, 189, 1)',
            img: Ziplinimg,
            Cardname: 'Zeplin',
        },
    ];

    return (
        <div className="design">
            <div className="heading">
                <h1>{heading}</h1>
            </div>
            <div className="designCard1" >
                {Data.map((item, index) => (
                    <Photoshop
                        key={index}
                        img={item.img}
                        Cardname={item.Cardname}
                        background={item.background}
                    />
                ))}
            </div>
        </div>
    );
}
