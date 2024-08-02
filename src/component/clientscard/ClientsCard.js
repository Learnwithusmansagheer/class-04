import React from 'react';
import NewClientsCard from '../new-clients-card/NewClientsCard';
import AnotherClientsCard from '../../component/anotherclientscard/AnotherClientsCard';
import AnotherClientsCard1 from '../anotherclientscard1/AnotherClientsCard1';
import AnotherClientsCard2 from '../anotherclientscard2/AnotherClientsCard2';
import './ClientsCard.css'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
// import './ClientCard.css';

export default function ClientCard() {
    const information = [
        {
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
        //    width:'330px',
            
        },
    ];

    const anotherInformation = [
        {
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        
        },
    ];
    const anotherInformation1 = [
        {
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
           
        },
    ];
    const anotherInformation2 = [
        {
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          
        },
    ];

    return (
        <div  className="container11" id='container11'>
            <div className="one">
            {information.map((info, index) => (
                <NewClientsCard
                    key={index}
                    para={info.para}
                    // width={info.width}
                    // height={info.height}
                    // padding={info.padding}
                />
            ))}
              {anotherInformation.map((info, index) => (
                <AnotherClientsCard
                    key={index}
                    para={info.para}
                    // width={info.width}
                    // height={info.height}
                    // padding={info.padding}
                />
            ))}
            </div>
            <div className="two">
            {anotherInformation1.map((info, index) => (
                <AnotherClientsCard1
                    key={index}
                    para={info.para}
                    // width={info.width}
                    // height={info.height}
                    // padding={info.padding}
                />
            ))}
             {anotherInformation2.map((info, index) => (
                <AnotherClientsCard2
                    key={index}
                    para={info.para}
                    // width={info.width}
                    // height={info.height}
                    // padding={info.padding}
                />
            ))}
            </div>
          
        </div>
    );
}
