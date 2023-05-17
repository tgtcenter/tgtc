import React from "react";
import "../css/FeatureCard.css";

function FeatureCard({ image, heading, content }) {
  return (
    <div className="feature-card">
      {/* <img src={image} alt={heading} className="feature-card__image" /> */}
      <h2 className="feature-card__heading">{heading}</h2>
      <p className="feature-card__content">{content}</p>
    </div>
  );
}

export default FeatureCard;
