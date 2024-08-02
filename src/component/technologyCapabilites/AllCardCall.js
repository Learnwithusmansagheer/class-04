import React from 'react';

import DesignCard from '../technologyCard/DesignCard';

export default function AllCardCall() {
    const data = [{
        heading: 'DESIGN',
       
    },
   
   ];
  
    return (
        <div className='container'style={{backgroundColor:'green',display:'flex'}}>
            {data.map((item, index) => (
                <DesignCard
                    key={index}
                    heading={item.heading} 
                />
            ))}
        </div>
    );
}
