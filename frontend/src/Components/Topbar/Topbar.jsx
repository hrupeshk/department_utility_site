import React from 'react'
import './Topbar.css'

const Navbar = () => {
  return (
    <div className='topbar'>
      <div className='leftpart'>
        <ul>
            <li><a href="">Home</a></li>
            <span className="separator">|</span>
            <li><a href="">Student</a></li>
            <span className="separator">|</span>
            <li><a href="">Faculty</a></li>
            <span className="separator">|</span>
            <li><a href="">TU</a></li>
            <span className="separator">|</span>
            <li><a href="">Contact</a></li>
           
        </ul>
      </div> 
      <div className='rightpart'>
        <div className='rightcontent'>
        <div className='modechange'>
          <span className='darkmode'><a href="">A</a></span>
          <span className='lightmode'><a href="">A</a></span>

        </div>
        <div className='fontchange'>
        <span className='fontdecrease'><a href="">A-</a></span>
        <span ><a href="">A</a></span>
        <span className='fontincrease'><a href="">A+</a></span>

        </div>
        <div className='languagechange'>
          <ul>
            <span><a href="">हिंदी</a></span>
            <span className="separator">|</span>
            <span><a href="">ENG</a></span>
          </ul>

        </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
