import React from 'react'
import './Navbar.css'
import Button from '../button/Button'
import Logo from '../../assets/images/techloset logo.png'
import { hover } from '@testing-library/user-event/dist/hover'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
export default function Navbar() {
  return (
    <>
      <header className='header'>
        <nav>
          <div>
            <a href="https://www.techloset.com/">
              <img className="header-logo" id="img1" src={Logo} alt="Techloset Logo" />
            </a>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="menu">
            <li><a href="#">Cases</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#"><Button id='navbar_button' title='Hire Us' className='landing_button'/></a></li>
          </ul>
        </nav>
       </header>
   
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>


    </>
  )
}
