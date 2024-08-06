import React from 'react'
import Footer from '../../component/footer/Footer'

export default function CallFooter() {
    const information = [
        {
            heading: 'lsakdjflsdkf',
            paragraph: {
                p1: ';aslkdjf;sldkjf;sldkf',
                p2: 'iiiiiiiiiiiiiiiiiiiii'
            }
        },
        {
            heading: 'lsakdjflsdkf',
            paragraph: {
                p1: ';aslkdjf;sldkjf;sldkf',
                p2: 'iiiiiiiiiiiiiiiiiiiii'
            },
            paragraph: {
                p1: ';aslkdjf;sldkjf;sldkf',
                p2: 'iiiiiiiiiiiiiiiiiiiii',
                 p1: ';aslkdjf;sldkjf;sldkf',
                p2: 'iiiiiiiiiiiiiiiiiiiii',
                 p1: ';aslkdjf;sldkjf;sldkf',
                p2: 'iiiiiiiiiiiiiiiiiiiii'
            }
        }
    ];
  
    return (
        <>
            {information.map((item, index) => (
                <Footer
                    key={index}
                    heading={item.heading}
                    paragraph={item.paragraph}
                />
            ))}
        </>
    );
}
