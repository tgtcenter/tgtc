import React from "react";
import Banner from "../components/Banner";
import WhyUs from "../components/WhyUs";
import StudentForm from "../components/StudentForm";

function Home() {
  return (
    <div>
      <Banner />

      <div className="home-container"></div>
      <hr />
      <WhyUs />
      <hr />
      <StudentForm />
      <hr />
      <br />
    </div>
  );
}

export default Home;
