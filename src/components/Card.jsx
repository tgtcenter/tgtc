import React from "react";
import "../components/css/Card.css";

const Card = ({ imgUrl, title, description }) => {
  return (
    <div className="card" data-aos="flip-up" data-aos-delay="150">
      <div className="content">
        <div className="img">
          <img src={imgUrl} alt="service-icon" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
