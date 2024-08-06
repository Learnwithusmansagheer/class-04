import React from 'react'
import './CallWorkCard.css'
import WorkCard from './WorkCard'
import Manimg from '../../assets/images/spacial.png'   
import SpeedButton from '../../assets/images/spedbutton.png' 
import Starbutton from '../../assets/images/star.png'
import image from '../../assets/images/manimg.png'
import { height } from '@fortawesome/free-solid-svg-icons/fa0'
export default function CallWorkCard() {
    const information = [{
        image: Manimg,
        heading: 'Specialization',
        paragraph: 'Building on 5 years of Next.js focus, we are the industry leader in providing unmatched expertise and experience for headless web implementations, delivering top-notch solutions for businesses seeking a specialized partner.'
    },
    {
        image:image,
        heading: 'Consulting approach',
        paragraph: 'Building on 5 years of Next.js focus, we are the industry leader in providing unmatched expertise and experience for headless web implementations, delivering top-notch solutions for businesses seeking a specialized partner.'
    },
    {
        image: SpeedButton,
        heading: 'Speed & flexibility',
        paragraph: 'Building on 5 years of Next.js focus, we are the industry leader in providing unmatched expertise and experience for headless web implementations, delivering top-notch solutions for businesses seeking a specialized partner.'
    },
    {
        image: Starbutton ,
        heading: 'Stability',
        paragraph: 'Building on 5 years of Next.js focus, we are the industry leader in providing unmatched expertise and experience for headless web implementations, delivering top-notch solutions for businesses seeking a specialized partner.'
    }]
    return (

        <>
            <div className="container-setting">


                {information.map((item, index) => (
                    <WorkCard
                        key={index}
                        image={item.image}
                        heading={item.heading}
                        paragraph={item.paragraph}
                    />
                ))}
            </div>
        </>
    )
}
