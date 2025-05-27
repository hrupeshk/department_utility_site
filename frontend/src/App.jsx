import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Card from './Components/Card/Card'
import Eventcard from './Components/Eventcard/Eventcard'
import FacultypageCard from './Components/FacultypageCard/FacultypageCard'
import ImageSlider from './Components/ImageSlider/ImageSlider'
import HomebackgroundImage from './Components/Homebackgroundimage/HomebackgroundImage'
import DepartmentStats from './Components/DepartmentStatsCounter/DepartmentStatsCounter'
import img1 from './assets/HomeImages/IMG1.jpg';
import img2 from './assets/HomeImages/IMG2.jpg';
import img3 from './assets/HomeImages/IMG3.jpg';
import img4 from './assets/HomeImages/IMG4.jpg';
import AboutSection from './Components/AboutSection/AboutSection'
import VisionMissionSection from './Components/VisionMissionSection/VisionMissionSection'

// Home page component
const HomePage = () => {
  return (
    <> 
      <DepartmentStats/>
      <AboutSection/>
      <VisionMissionSection/>
    </>
  );
};

const App = () => {
  const images = [
    img1, img2, img3, img4
  ];
  
  return (
    <div className='my-container'>
      <Topbar/>
      <Navbar/>
      <HomebackgroundImage/>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faculty/regular" element={<FacultypageCard />} />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
