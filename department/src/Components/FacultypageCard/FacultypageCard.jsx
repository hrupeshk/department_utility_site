import React from "react";
import "./FacultypageCard.css";
import avatar from '../../assets/avatar.jpg';
import Linkedin from '../../assets/linkedin.webp';
import Email from '../../assets/email.webp';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';


const facultyData = Array.from({ length: 15 }, (_, i) => ({
  name: "SkinnySky",
  designation: "Designation",
  image: avatar, 
  hasLinkedIn: true,
  hasEmail: true,
}));

export default function FacultyPage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        {/* Head of Department */}
        <div className="hod-section">
          <h2 className="section-title">Head of Department</h2>
          <div className="hod-card">
            <img src={avatar} alt="HOD" className="hod-image" />
            <div className="hod-info "> 
              <div className='profile-details'>
                <div>
                  <h3 className="hod-name">SkinnySky</h3>
                  <p className="designation">Designation</p>
                </div> 
                <div className="icons">
                  <img src={Linkedin} alt="LinkedIn" />
                  <img src={Email} alt="Email" />
                </div> 
              </div>
              <p className="description">
                Established in 1971 with the acquisition of an IBM System/370 one of the most powerful computers in India...
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="specialization-title">Specialization</div>
        <div className="faculty-grid">
          {facultyData.map((faculty, index) => (
            <div className="faculty-card" key={index}>
              <img src={faculty.image} alt="Faculty" className="faculty-image" />
              <div className="faculty-info ">
                <div className='name-designation'> 
                <h4 className="faculty-name">{faculty.name}</h4> 
                <p className="faculty-designation">{faculty.designation}</p>
                </div>
                <div className="icons">
                  {faculty.hasLinkedIn && <img src={Linkedin} alt="LinkedIn" />}
                  {faculty.hasEmail && <img src={Email} alt="Email" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */} 
    </>
  );
}

