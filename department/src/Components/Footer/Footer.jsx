import React from 'react'
import './Footer.css'
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footerinfo'>
        <img src={Logo} alt="logo" className='footerlogo' />
        <h1>Department of Computer Science & Engineering</h1>
        <p>School of Engineering Tezpur University Napaam, Sonitpur, Assam-784 028</p>

        </div> 

        <div className='footerlinks'>
            <ul>
                <li><a href="">TU CS</a></li>
                <li><a href="">HPCC</a></li>
                <li><a href="">Alumini</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Grievance Committee</a></li>
            </ul>
        </div>

        <hr className='footerline'/>

        <div className='footerupdate'>
            <p>Website last updated on: YYYY-MM-DD HH:MM:SC PM</p>
        </div>
      
    </div>
  )
}

export default Footer
