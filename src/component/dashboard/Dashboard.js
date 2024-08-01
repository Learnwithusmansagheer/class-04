// Dashboard.js
import React from 'react';
import './Dashboard.css'
import Card from '../card/Card';
import cardImage from '../../assets/images/vector1.png'; // Ensure correct path
// Ensure correct path

function Dashboard() {
  const cardsData = [
    {
      img: cardImage,
      heading: 'Mobile  Development',
      paragraph: 'Lorem ipsum dolor sit amet, consectrs  adipiscing elit, sed do eiusmod tempor  ',
      iconBackground: 'rgba(106, 154, 255, 1)'

    },
    {
      img: cardImage,
      heading: 'Web App Development',
      paragraph: 'Lorem ipsum dolor sit amet, consectrs  adipiscing elit, sed do eiusmod tempor.',
      iconBackground: 'rgba(255, 115, 66, 1)',
 

    },

    {
      img: cardImage,
      heading: 'AI Based Solutions',
      paragraph: 'Lorem ipsum dolor sit amet, consectrs  adipiscing elit, sed do eiusmod tempor',
      iconBackground: 'rgba(64, 211, 229, 1)'
    },
    {
      img: cardImage,
      heading: 'Blockchain Solutions',
      paragraph: 'Lorem ipsum dolor sit amet, consectrs  adipiscing elit, sed do eiusmod tempor',
      iconBackground: 'rgba(255, 209, 103, 1)',
    },
    {
      img: cardImage,
      heading: 'Saas Products',
      paragraph: 'Lorem ipsum dolor sit amet, consectrs  adipiscing elit, sed do eiusmod tempor',
      iconBackground: 'rgba(31, 202, 170, 1)'
    },


  ];

  return (
    <>


      <div className="container1">
        {cardsData.map((card, index) => (
          <Card
            key={index} // Add a unique key prop
            img={card.img}
            heading={card.heading}
            paragraph={card.paragraph}
            iconBackground={card.iconBackground}
        

          />
        ))}
      </div>










    </>
  );
}

export default Dashboard;
