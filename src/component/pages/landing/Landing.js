import React from 'react'
import Navbar from '../../header/Navbar'
import './Landing.css'
import Button from '../../button/Button'
import CallNumber from '../../callNumber/CallNumber'
import Dashboard from '../../dashboard/Dashboard'
import CallLandingImg from '../../callLandingimg/CallLanding';
import ClientsCard from '../../clientscard/ClientsCard';
import CallPartner from '../../partenercard/CallPartner'
import CallstudyCard from '../../caseStudyCard/CallstudyCard'

import AllCardCall from '../../technologyCapabilites/AllCardCall';
import CallWorkCard from '../../workCard/CallWorkCard'
import SubscribeForm from '../../emailcard/SubscribeForm';
import Footer from '../../footer/Footer';

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="container-fluid" id='main_info'>
        <h1>Your very own <br /> Technology Closet!</h1>
        <p>Providing world class Tech-solutions to digitally transform your business. Say goodbye to <br /> frustration and hello to a world where technology obstacles become a thing of the past <br /> with our unparalleled tech-solution.</p>
        <Button title='Schedule a Call ' style={{ width: "150px", height: "40px", borderRadius: "99px", }} className='landing_button' />
      </div>

      <div className="services">
        <h1>Services We <br /> Provide for You</h1>
      </div>
      <div className="landing-card">
        <Dashboard />
      </div>
      <div className="top_rank">
        <h1>We're at THE <br /> TOP of the rank</h1>
      </div>
      <div className="container-fluid" id='call' >
        <CallNumber />
      </div>
      <div className="callimg">
        <CallLandingImg />
      </div>
      <div className="clients-heading">
        <h1>What our <br /> clients say</h1>
      </div>
      <div className="add-card">
        <ClientsCard />
      </div>
      <div className="technology-capabilites">
        <h1>Technology Capabilities</h1>
      </div>
      <div className="Technology_design_card">
        <AllCardCall />
      </div>

      <div className="partner_cardSetting">
        <div className="heaidng_partner">
          <h1>Clients And <br /> Partners</h1>
        </div>
        <div className="cardSetting">
          <CallPartner />
        </div>
      </div>
      <div className="main-study-card">
        <div className="study_heading">
          <h1>See our <br /> Case Studies</h1>
        </div>
        <div className="CallstudyCard">
          <CallstudyCard/>
        </div>
      </div>
      <div className="setting_StudyCard">
        <div className="studyheading">
          <h1>Why work with us</h1>
        </div>
        <div className="add-Card">
      <CallWorkCard/>
        </div>
      </div>
      {/* Subscribes form */}
      <div className="settingform">
      <SubscribeForm/>
      </div>
      <div className="footer-setting">
      <Footer/>
      </div>

    </>
  )
}
