import React from 'react'
import './About.css'
import Navbar from '../header/Navbar'
import Card from '../card/Card'
import Pic from '../../assets/images/card.jpg'
export default function About() {
    return (<>
        <Navbar />
        <div className='about_main'>
            <div className="heaidng1">
                <h1>An experience you'd expect from a design system</h1>
                <p>Opinionated and designed for daily use.</p>
            </div>
        </div>
        <div class="container-md"id='container'>
            <div className="row">
                <div className="col-sm-4 " >
                    <Card   className="card-custom" src={Pic}   subtitle={"fhy my name is muhammad usman"} discription={"slkdjfsldkflsd;jflsdkjfsldkjfsldkfj"} footer={"hy footer"} />
                </div>
                <div className="col-sm-4">
                    <Card   className="card-custom" src={Pic}  subtitle={"flskdjflsa;dkfjlsdkfjlsdk"} discription={"slkdjfsldkflsd;jflsdkjfsldkjfsldkfj"} />
                </div>
                <div className="col-sm-4">
                    <Card   className="card-custom" src={Pic}  subtitle={"flskdjflsa;dkfjlsdkfjlsdk"} discription={"slkdjfsldkflsd;jflsdkjfsldkjfsldkfj"} />
                </div>
            </div>


        </div >
    </>
    )
}
