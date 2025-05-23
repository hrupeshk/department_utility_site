import React from "react";
import { FaRupeeSign } from "react-icons/fa"; 
import { CiClock2 } from "react-icons/ci";
import { LuHourglass } from "react-icons/lu"; 
import "./Card.css"; 

const Card = ({ title, fundedBy, pi, ci, amount, duration }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <p className="funded"><strong>Funded by -</strong> {fundedBy}</p>
        <p><strong>PI :</strong> {pi}</p>
        <p><strong>CI :</strong> {ci}</p>
      </div>
      <div className="card-footer">
        <span className="footer-item">
          <FaRupeeSign className="icon rupee" /> {amount}
        </span>
        <span className="footer-item">
          <CiClock2 className="icon clock" /> {duration}
        </span>
        
       
        
      </div>
    </div>
  );
};

export default Card;
