import React from "react";
import Banner from "./Banner";
import WhyUs from "./WhyUs";

function Home() {
  return (
    <div>
      <Banner />

      <div className="home-container">
        <h1>Welcome to our coaching institute</h1>
        <p>
          We are dedicated to providing the best education and coaching to help
          you achieve your goals.
        </p>
      </div>
      <hr />
      <WhyUs />
      <hr />
      <br />
    </div>
  );
}

export default Home;
