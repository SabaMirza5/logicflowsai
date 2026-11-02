
import React from "react";
import Navbar from "../Navbar";
import HeroPropFirst from "../HeroPropFirst";
import managed1 from "../../assets/imgs/managed1.png";
import HeroPropSecond from "../HeroPropSecond";
import managed3 from "../../assets/imgs/managed3.png";
import managed2 from "../../assets/imgs/managed2.png";
import managed5 from "../../assets/imgs/managed5.png";
import managed6 from "../../assets/imgs/managed6.png";
import NewsletterSection from "../NewsletterSection";
import Trusty_section from "../Trusty_section";
import ContactUs from "../ContactUs"; 
import Footer from "../Footer";

function ManagedServices() {
  const data = {
    heading: "Tailored Managed Services Solution", // Added heading here
    image1: managed2,
    options: [
      { title: "Outsourced IT Support", id: 1 },
      { title: "Ad-hoc Support", id: 2 },
      { title: "Hardware & Software", id: 3 },
    
    ],
    content: {
      "Outsourced IT Support": {
        heading: "Outsourced IT Support Offers:",
        details: [
          "CMatoto Technologies lets clients focus on business goals while we manage their technology.",
          "Three Support Models: Ad-hoc, Onsite, and Remote for flexible, hands-on, and efficient problem resolution.",
          "Proactive monitoring and rapid incident resolution.",
          "Utilizes various tools to address clients' needs, with experienced engineers diagnosing and resolving IT problems.",
          "Ensures problems are addressed and resolved within agreed Service Level Agreements.",
          "Central point for proactive monitoring, incident reporting, and resolution.",
        ],
        image: managed3,
      },
     

      "Ad-hoc Support": {
        heading: "Ad-hoc Support Offers:",
        details: [
            "Flexible, on-demand support for specific IT issues.",
            "No long-term commitment required, pay-as-you-go model.",
            "Ideal for businesses needing occasional IT expertise.",
            "Quick response times to handle urgent IT concerns.",
            "Support for both hardware and software troubleshooting.",
        ],
        image: managed5,
      },
      "Hardware & Software": {
        heading: "Hardware & Software Services:",
      details: [
        "Provisioning and installation of essential hardware.",
        "Software procurement and licensing solutions.",
        "System upgrades and regular maintenance for longevity.",
        "Hardware and software troubleshooting and repair.",
        "Advice on choosing cost-effective, high-performance solutions.",
      ],
        image: managed6,
      },
    },
  };
  return (
    <>
      <Navbar />
      <HeroPropFirst
        heading="Unlock Efficiency with Expert"
        highlightText="Managed Services"
        description="Our comprehensive Managed Services empower your business to streamline operations, reduce downtime, and enhance productivity by providing proactive monitoring, expert support, and strategic guidance tailored to your unique needs. Let us handle the complexities of IT management, so you can focus on what matters most—growing your business."
        image={managed1}
        secondHeading="Elevate with "
        secondHighlightText="Managed Excellence"
        secondDescription="Transform your IT operations with our advanced Managed Services, offering proactive monitoring, seamless support, and customized solutions. We handle the intricacies of IT management, ensuring your systems run smoothly and efficiently."
      />
      <HeroPropSecond data={data} />
      <Trusty_section />
      <NewsletterSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default ManagedServices;
