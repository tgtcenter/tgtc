import React from "react";
import Banner from "../components/Banner";
import WhyUs from "./WhyUs";
import StudentForm from "../components/StudentForm";

function Home() {
  return (
    <div>
      <Banner />
      <div className="home-container"></div>
      <WhyUs />
      <StudentForm />
    </div>
  );
}

export default Home;
