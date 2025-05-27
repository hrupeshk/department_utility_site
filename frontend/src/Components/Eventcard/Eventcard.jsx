import './Eventcard.css'
import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-header">
        <FaCalendarAlt className="icon" />
        <span className="event-date">{event.date}</span>
        <FaClock className="icon" />
        <span className="event-time">{event.time}</span>
      </div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-description">{event.description}</p>
    </div>
  );
};

export default EventCard;
