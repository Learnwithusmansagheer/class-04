import React from 'react'
import CaseStudyCard from './CaseStudyCard'
import Laptopimg1 from '../../assets/images/laptop pic.png'
import Mobileimg from '../../assets/images/mobile pic.png'
import Laptopimg2 from '../../assets/images/back1.png'
import Mobileimg2 from '../../assets/images/mobile piza.png'
import Laptopimg3 from '../../assets/images/laptoppic2.png'

import './CallstudyCard.css'

export default function CallstudyCard() {
    const studyInfo = [
      {
        backgroundColor: '#A6E3FD',
        backgroundColor1: '#03A9F5',
        image1: Laptopimg1,
        image2: Mobileimg,
        heading: 'Resumas',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod storesds  tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        backgroundColor: '#B7FFCF',
        backgroundColor1: 'rgba(58, 227, 127, 1)',
        image1: Laptopimg2,
        image2:  Mobileimg2,
        heading: 'GoGrocer',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod storesds  tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        backgroundColor: 'rgba(255, 225, 213, 1)',
        backgroundColor1: 'rgba(245, 129, 83, 1)',
        image1: Laptopimg3,
        // image2: Mobileimg,
        heading: 'Peach Mindfulness',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod storesds  tempor incididunt ut labore et dolore magna aliqua.',
      }
    ];
  
    return (
      <div className='container2' >
        {studyInfo.map((item, index) => (
          <CaseStudyCard
            key={index}
            backgroundColor={item.backgroundColor}
            backgroundColor1={item.backgroundColor1}
            image1={item.image1}
            image2={item.image2}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    );
  }