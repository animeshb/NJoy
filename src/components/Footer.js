import React from 'react'
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='footer'>
          <div className='footer-heading footer-0'>
            <h2>NJoy</h2>
          </div>
          <div className='footer-heading footer-1'>
            <h2 className='first'>Attractions</h2>
            <h2>&nbsp;</h2>
            <Link to="/seaside">Seaside Boardwalk</Link>
            <Link to="/six">Six Flags Great Adventure</Link>
            <Link to="/atlantic">Atlantic City</Link>
            <Link to="/pnc">PNC Bank Art Center</Link>
            <Link to="/prudential">Prudential Center</Link>
          </div>
          <div className='footer-heading footer-2'>
            <h2>&nbsp;</h2>
            <Link to="/park">Liberty State Park</Link>
            <Link to="/liberty">Liberty Science Center</Link>
            <Link to="/gardens">Botanical Gardens</Link>
            <Link to="/mall">American Dream Mall</Link>
            <Link to="/princeton">Princeton</Link>
          </div>
          <div className='footer-heading footer-3'>
            <h2>Quick Links</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer