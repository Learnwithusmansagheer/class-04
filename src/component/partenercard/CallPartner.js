
import React from 'react';
import PartnerCard from '../../component/partenercard/PartnerCard';
import img1 from '../../assets/images/partnerimg1.png'
import img2 from '../../assets/images/partnerimg2.png'
import img3 from '../../assets/images/partnerimg3.png'
import img4 from '../../assets/images/partnerimg4.png'
import img5 from '../../assets/images/partnerimg5.png'
import img6 from '../../assets/images/partnerimg6.png'
import img8 from '../../assets/images/partnerimg8.png'
import img9 from '../../assets/images/partnerimg9.png'
import img10 from '../../assets/images/partnerimg10.png'
import img11 from '../../assets/images/partnerimg11.png'
import './CallPartner.css'
export default function CallPartner() {
    const Information = [{
        img: img1,
        width:209,
        height:66,
    },
    {
        img: img2,
        width:209,
        height:66,
    },
    {
        img: img3,
        width:168,
        height:40,
    },
    {
        img: img4,
        width:'auto',
    },
    {
        img: img5,
        width:190,
        height:50,

    },
    {
        img: img6,
        width:190,
        height:50,
    },
    {
        img: img8,
        width:97,
        height:87,

    },
    {
        img: img9,
        width:97,
        height:87,
    },
    {
        img: img10,
        width:237,
        height:38,
    },
    {
        img: img11,
        width:190,
        height:30,
    },
  
];
    
    return (
        <div className='setting_partner'>
            {Information.map((item, index) => (
                <PartnerCard 
                    key={index}
                    img={item.img}
                    width={item.width}
                    height={item.height}
                />
            ))}
        </div>
    );
}