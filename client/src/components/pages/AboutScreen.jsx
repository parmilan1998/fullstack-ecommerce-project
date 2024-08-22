import React from "react";
import AboutStory from "../organisms/AboutStory";
import Services from "../templates/Services";
import AboutSalesCountSection from "../organisms/AboutSalesCountSection";

const AboutScreen = () => {
  return (
    <>
      <AboutStory />
      <AboutSalesCountSection />
      <div className="py-8">
        <Services />
      </div>
    </>
  );
};

export default AboutScreen;
