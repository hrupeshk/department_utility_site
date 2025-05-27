import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo.png";
import naacLogo from "../../assets/Naac_logo.png";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import './Navbar.css'


const Navbar = () => { 
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeFacultyDropdown, setActiveFacultyDropdown] = useState(false);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveFacultyDropdown(false);
  };

  const handleFacultyMouseEnter = () => {
    setActiveFacultyDropdown(true);
  };

  const handleFacultyMouseLeave = () => {
    setActiveFacultyDropdown(false);
  };

  return (
    <div className='navbar'>
        <div className='uppernav'>
            <div className='logopart'>
                <img src={Logo} alt="Logo" className='logo' />
                <div className='name'>
                    <h2>TEZPUR UNIVERSITY</h2>
                    <p>Specialized Knowledge Promotes Creativity</p>
                </div>
            </div>
            <div className='infopart'>
                <div className='naacinfo'>
                    <img src={naacLogo} alt="naacLogo" className='naaclogo' />
                    <p>NAAC A+ Accredited</p>
                </div>
                <div className='addressinfo'>
                    <div className='address'>
                        <p>Tezpur University</p>
                        <p>Napaam, Sonitpur, Assam-784028</p>
                    </div>
                    <CiLocationOn className='locationicon' />
                </div>
            </div>
        </div>
        <hr className='navline' />

        <div className='lowernav'>
            <ul>
                <li><a href="">Academics</a><RiArrowDropDownLine className='arrowicon' /></li>
                <li><a href="">About Us</a><RiArrowDropDownLine className='arrowicon' /></li>
                
                <li
                   className='dropdown-container'
                   onMouseEnter={() => handleMouseEnter('people')} 
                   onMouseLeave={handleMouseLeave}
                >
                    <a href="#">People</a> 
                    <RiArrowDropDownLine className='arrowicon' />

                    {activeDropdown === 'people' && (
                        <div className='dropdown-menu'> 
                           <div 
                                className="dropdown-item faculty-dropdown"
                                onMouseEnter={handleFacultyMouseEnter}
                                onMouseLeave={handleFacultyMouseLeave}
                           >
                            <span>Faculty</span>

                            {activeFacultyDropdown && (
                                <div className="sub-dropdown-menu">
                                     <Link to="/faculty/regular" className="dropdown-item">Regular</Link>
                                     <div className="dropdown-item">Non-Regular</div>
                               </div> 
                            )}
                           </div>
                           <div className="dropdown-item">Staff</div>
                        </div>
                    )}
                </li>

                <li><a href="">Research</a><RiArrowDropDownLine className='arrowicon' /></li>
                <li><a href="">Events</a><RiArrowDropDownLine className='arrowicon' /></li>
                <li><a href="">News-Letter</a><RiArrowDropDownLine className='arrowicon' /></li>
                <li><a href="">Student's Corner</a><RiArrowDropDownLine className='arrowicon' /></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
