import React from "react";
import "./VisionMissionSection.css";

const VisionMissionSection = () => {
  return (
    <section className="vision-mission-section">
      <div className="vision-mission-container">
        <div className="vision-block">
          <h2 className="vision-title">Our Vision</h2>
          <p className="vision-text">
            To be a premier center for learning and research in computer science and engineering,
            developing professionals who lead in industry, academia, and entrepreneurship.
          </p>
        </div>

        <div className="mission-block">
          <h2 className="mission-title">Mission</h2>
          <p className="mission-text">
            Our department is dedicated to advancing computer engineering through a blend of academic rigor, 
            innovative research, and industry collaboration. We provide a dynamic environment that fosters growth 
            for students and faculty alike. By continuously enhancing our curriculum and facilities, we ensure our 
            graduates are equipped with cutting-edge skills and strong ethical standards. Through individual and team 
            projects, we prepare students to tackle real-world challenges. Our commitment to research and consultancy 
            drives us to deliver valuable solutions, positioning our department as a center of excellence in technological innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
