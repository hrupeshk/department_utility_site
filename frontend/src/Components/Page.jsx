import React from 'react'
import Topbar from './Topbar/Topbar'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Card from './Card/Card'
import Eventcard from './Eventcard/Eventcard'
import FacultypageCard from './FacultypageCard/FacultypageCard'
import ImageSlider from './ImageSlider/ImageSlider'
import HomebackgroundImage from './HomebackgroundImage/HomebackgroundImage'
import DepartmentStats from './DepartmentStatsCounter/DepartmentStatsCounter'
import img1 from '../assets/HomeImages/IMG1.jpg';
import img2 from '../assets/HomeImages/IMG2.jpg';
import img3 from '../assets/HomeImages/IMG3.jpg';
import img4 from '../assets/HomeImages/IMG4.jpg';
import AboutSection from './AboutSection/AboutSection'
import VisionMissionSection from './VisionMissionSection/VisionMissionSection'


const Page = () => {
   const images = [
    img1, img2, img3, img4
  ];
  return (
    
    <div className='my-container'>
      <Topbar/>
      <Navbar/>
      <HomebackgroundImage/>
      <AboutSection/>
      <DepartmentStats/>
      <VisionMissionSection/>
      <Footer/>
      
      
      
    </div>
  )
}

export default Page
