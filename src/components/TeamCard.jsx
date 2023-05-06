import React from "react";

const TeamCard = () => {
  return (
    <div className="card">
      <div className="bg-profile">
        <img src="./assets/profile/pic-01.jpeg" alt="" />
      </div>
      <div className="content">
        <h3>John Doe</h3>
        <p>Founder & CEO</p>
        <div className="social-links">
          <i className="fa fa-lg fa-facebook-f"></i>
          <i className="fa fa-lg fa-twitter"></i>
          <i className="fa fa-lg fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
