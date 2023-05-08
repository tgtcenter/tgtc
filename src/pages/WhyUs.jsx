import Card from "../components/Card";
import React from "react";

import { serviceData } from "../assets/data/serviceData";
import FeatureCard from "../components/FeatureCard";

export default function WhyUs() {
  return (
    <div className="why-us">
      <div class="why-head" data-aos="fade-up" data-aos-delay="300">
        <h1>Our Achievers</h1>
        <h3>हम टैली सीखते नहीं है, टैली के साथ खेलते हैं.</h3>
      </div>
      <div class="service">
        {serviceData.map((service) => (
          <Card
            imgUrl={service.imgUrl}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      <div className="service">
        {serviceData.map((service) => (
          <FeatureCard
            image={service.imgUrl}
            heading={service.title}
            content={service.description}
          />
        ))}
      </div>
    </div>
  );
}
