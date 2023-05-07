import React from "react";
import Banner from "./Banner";
import WhyUs from "./WhyUs";
import StudentForm from "./StudentForm";

function Home() {
  return (
    <div>
      <Banner />

      <div className="home-container">
  
      </div>
      <hr />
      <WhyUs />
      <hr />
      <StudentForm/>
      <hr />
      <br />
    </div>
  );
}

export default Home;
