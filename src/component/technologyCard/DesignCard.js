import React from 'react';
import './DesignCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Photoshop from '../photoshop/Photoshop';
import Figmaimg from '../../assets/images/figma.png';
import Illustrator from '../../assets/images/illustrator.png'
import Photoshopimg from '../../assets/images/photoshop.png'
import Xd from '../../assets/images/Xd.png'
import Ziplinimg from '../../assets/images/zipline.png'
import Reactimg from '../../assets/images/react.png'
import Typescript from '../../assets/images/typescript.png'
import Nextjs from '../../assets/images/Next js.png'
import Javasrcipt from '../../assets/images/JavaScript.png'
import Tailwindcss from '../../assets/images/tailwindcss.png'
import Html from '../../assets/images/html.png'
import Reactnative from '../../assets/images/react.png'
import Nodejs from '../../assets/images/nodejs.png'
import Pythondj from '../../assets/images/pythondj.png'
import Jenkins from '../../assets/images/jenkins.png'
import kubernetes from '../../assets/images/kubernetes.png'
import Redix from '../../assets/images/Redux.png'
import Pythonflax from '../../assets/images/pytohon flax.png'
import Tensor from '../../assets/images/tensorflow.png'
import a1 from '../../assets/images/a1.png'
import a2 from '../../assets/images/a2.png'
import a3 from '../../assets/images/a3.png'
import a4 from '../../assets/images/a4.png'
import a5 from '../../assets/images/a5.png'
import a6 from '../../assets/images/a6.png'
import a11 from '../../assets/images/a11.png'
import a22 from '../../assets/images/a22.png'
import a33 from '../../assets/images/a33.png'
import a44 from '../../assets/images/a44.png'

export default function DesignCard({ }) {


    const Data = [
        {
            heading: '     Design',
            items: [
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
            ],
        },
        {
            heading: 'FRONT-END',
            items: [
                {
                    background: 'rgba(214, 249, 255, 1)',
                    img: Reactimg,
                    Cardname: 'React',
                },
                {
                    background: 'rgba(164, 217, 255, 1)',

                    img: Typescript,
                    Cardname: 'TypeScript',
                },
                {
                    background: 'rgba(198, 199, 200, 1)',
                    img: Nextjs,
                    Cardname: 'Next.js',
                },
                {
                    background: 'rgba(250, 236, 166, 1)',

                    img:Javasrcipt,
                    Cardname: 'JavaScript',
                },
                {
                    background: 'rgba(198, 244, 252, 1)',

                    img:  Tailwindcss,
                    Cardname: 'Tailwind CSS',
                },
                {
                    background: 'rgba(190, 228, 251, 1)',

                    img: Html,
                    Cardname: 'React Native',
                },
                {
                    background: 'rgba(235, 222, 255, 1)',
                    img:Reactnative,
                    Cardname: 'React Native',
                },


            ],
        },
        {
            heading: 'BACK-END',
            items: [
                {
                    background: 'rgba(233, 255, 210, 1)',
                    img:Nodejs ,
                    Cardname: 'NodeJs',
                },
                {
                    background: 'rgba(195, 253, 231, 1)',

                    img: Pythondj,
                    Cardname: 'Python Dj',
                },
                {
                    background: 'rgba(255, 196, 194, 1)',
                    img: Jenkins,
                    Cardname: 'Jenkins',
                },
                {
                    background: 'rgba(204, 221, 255, 1)',

                    img: kubernetes,
                    Cardname: 'Kubernetes ',
                },
                {
                    background: 'rgba(255, 191, 188, 1)',

                    img: Redix ,
                    Cardname: 'Redis',
                },
                {
                    background: 'rgba(233, 236, 236, 1)',
                    img: Pythonflax ,
                    Cardname: 'Python Flask',
                },
                {
                    background: 'rgba(255, 235, 189, 1)',
                    img: Tensor ,
                    Cardname: 'TensorFlow',
                },
            ],

        },
        {
            heading: 'DATABASES',
            items: [
                {
                    background: 'rgba(221, 255, 216, 1)',

                    img: a1,
                    Cardname: 'MongoDB',
                },
                {
                    background: 'rgba(194, 225, 249, 1)',

                    img: a2,
                    Cardname: 'PostgreSQL',
                },
                {
                    background: 'rgba(255, 245, 215, 1)',

                    img: a3,
                    Cardname: 'Firebase',
                },
                {
                    background: 'rgba(248, 189, 249, 0.37)',
                    img: a4,
                    Cardname: 'Airtable',
                },
                {
                    background: 'rgba(255, 234, 189, 1)',
                    img: a5,
                    Cardname: 'GraphQL',
                },
                {
                    background: 'rgba(255, 234, 189, 1)',
                    img: a6,
                    Cardname: 'MySQL',
                },
            ],
        },
        {
            heading: 'Management',
            items: [
                {
                    background: 'rgba(221, 255, 216, 1)',

                    img: a11,
                    Cardname: 'Trello',
                },
                {
                    background: 'rgba(194, 225, 249, 1)',

                    img: a22,
                    Cardname: 'Jira',
                },
                {
                    background: 'rgba(255, 245, 215, 1)',

                    img: a33,
                    Cardname: 'MS Project',
                },
                {
                    background: 'rgba(248, 189, 249, 0.37)',
                    img: a44,
                    Cardname: 'Monday.com',
                },
                
            ],
        },
    ];


    return (



        <>
            <div className="design container-md lg-col-4">
                {Data.map((section, index) => (
                    <div key={index} className="headingAndData" >
                        <div className="heading1">  <h2>{section.heading}</h2></div>

                        <div className="designCard1">
                            {section.items.map((item, subIndex) => (
                                <Photoshop
                                    key={subIndex}
                                    img={item.img}
                                    Cardname={item.Cardname}
                                    background={item.background}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>


    );
}
