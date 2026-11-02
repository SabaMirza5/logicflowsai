import React from "react";
import OurServices from "../HomePage/OurServices";
import MindsBehindLogicFlows from "../HomePage/MindsBehindLogicFlows";
import aboutuspagehero from "../../assets/imgs/aboutuspagehero.png";
import NewsletterSection from "../NewsletterSection";

function OurServicesPage() {
  return (
    <div>
      <OurServices />
      <div className="py-20">
        <img src={aboutuspagehero} alt="" />
      </div>
      <MindsBehindLogicFlows />
      <NewsletterSection/>
    </div>
  );
}

export default OurServicesPage;
