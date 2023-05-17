import Card from "../components/Card";
import React from "react";

import { serviceData } from "../assets/data/serviceData";
import { featureData } from "../assets/data/featureData";
import FeatureCard from "../components/FeatureCard";

export default function WhyUs() {
  return (
    <div className="why-us">
      <div class="why-head" data-aos="fade-up" data-aos-delay="300">
        <h1>Our Achievers</h1>
        <h3>" हम TALLY GST सिखाते नहीं हैं, TALLY GST पोर्टल के साथ खेलते हैं "</h3>
      </div>
      <div class="service">
        {serviceData.map((service) => (
          <Card
            imgUrl={service.imgUrl}
            title={service.title}
            position={service.position}
            description={service.description}
          />
        ))}
      </div>
      <hr />
      <h1>Facilities we provide</h1>
      <div className="service">
        {featureData.map((feature) => (
          <FeatureCard heading={feature.title} content={feature.description} />
        ))}
      </div>
    </div>
  );
}
