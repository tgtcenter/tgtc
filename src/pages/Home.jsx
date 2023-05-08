import React from "react";
import Banner from "../components/Banner";
import WhyUs from "./WhyUs";
import StudentForm from "../components/StudentForm";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div>
      <Banner />

      <div className="home-container"></div>
      <hr />
      <WhyUs />
      {/* <FeatureCard/> */}
      <hr />
      <FeatureCard />
      <StudentForm />
      <hr />
      <br />
    </div>
  );
}

export default Home;
