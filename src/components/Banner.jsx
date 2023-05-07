import React from "react";
import "../css/Banner.css";
import bannerImg from "../assets/Happy student-amico.png";

function Banner() {
  return (
    <div className="jumbotron banner">
      <div className="container">
        <h className="lead">Welcome to our coaching institue</h>
        <h1 className="display-4">Tally GST Traning Center</h1>
        <p className="lead">
          A gateway to the <span style={{ color: "blue" }}>Professional</span>{" "}
          Way
        </p>
      </div>
      <div className="bannerIllustrator">
        <img src={bannerImg} alt="banner" />
      </div>
    </div>
  );
}

export default Banner