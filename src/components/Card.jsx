import React from "react";
import "../css/Card.css";

const Card = ({ imgUrl, title,position, description }) => {
  return (
    <div className="card" data-aos="flip-up" data-aos-delay="150">
      <div className="content">
        <div className="img">
          <img src={imgUrl} alt="service-icon" />
        </div>
        <h3>{title}</h3>
        <h6>{position}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
