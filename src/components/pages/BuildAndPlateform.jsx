import React from "react";
import Navbar from "../Navbar";
import HeroPropFirst from "../HeroPropFirst";
import build1 from "../../assets/imgs/build1.png";
import HeroPropSecond from "../HeroPropSecond";
import build3 from "../../assets/imgs/build3.png";
import build2 from "../../assets/imgs/build2.png";
import build4 from "../../assets/imgs/build4.png";
import build5 from "../../assets/imgs/build5.png";
import build6 from "../../assets/imgs/build6.png";
import build7 from "../../assets/imgs/build7.png";

import NewsletterSection from "../NewsletterSection";
import Trusty_section from "../Trusty_section";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

function BuildAndPlateform() {
  const data = {
    heading: "Tailored Build & Platforms Solution", // Added heading here
    image1: build2,
    options: [
      { title: "Website Design", id: 1 },
      { title: "Website Maintenance", id: 2 },
      { title: "Content Management Solution", id: 3 },
      { title: "APP Development", id: 4 },
      { title: "Platform Development", id: 5 },
    ],
    content: {
      "Website Design": {
        heading: "Website Design Offers:",
        details: [
          "Customized website design tailored to fit both small and large businesses.",
          "Fast, secure, and scalable websites to support business growth.",
          "Collaborate with our team to create a design that aligns with your brand identity and vision.",
          "Flexible packages available, including entry-level, mid-range, and advanced enterprise options.",
          "SEO-optimized layouts to boost online visibility and search rankings.",
          "Ongoing support and maintenance for long-term website performance.",
        ],
        image: build3,
      },
      "Website Maintenance": {
        heading: "Website Maintenance Offers:",
        details: [
          "Regular updates to ensure website security and performance.",
          "Content updates to keep your site fresh and relevant.",
          "Monitoring and fixing of broken links and errors.",
          "Regular backups to protect data and ensure quick recovery.",
          "Performance optimization for fast loading times.",
        ],
        image: build4,
      },

      "Content Management Solution": {
        heading: "Content Management Solution Offers:",
        details: [
          "Easy-to-use interfaces for managing site content.",
          "Customization options to fit unique business requirements.",
          "Integration with CRM, analytics, and marketing tools.",
          "User roles and permissions for secure content management.",
          "Support for multi-language content and localization.",
        ],
        image: build5,
      },
      "APP Development": {
        heading: "APP Development Offers:",
        details: [
          "Custom mobile app development for iOS and Android.",
          "User-friendly interfaces focused on functionality and design.",
          "Integration with existing business systems and APIs.",
          "App testing and optimization for smooth performance.",
          "Ongoing support and updates post-launch.",
        ],
        image: build6,
      },
      "Platform Development": {
        heading: "Platform Development Offers:",
        details: [
            'Custom platform development tailored to business needs.',
            'Integration with various systems for streamlined operations.',
            'Scalable solutions to accommodate growth and expansion.',
            'Enhanced security features to protect user data.',
            'Comprehensive post-launch support and maintenance.',
          ],
        image: build7,
      },
    },
  };
  return (
    <>
      <Navbar />
      <HeroPropFirst
        heading="Future-Ready Solutions for Your"
        highlightText="Digital Infrastructure"
        description="At the core of every successful business lies a strong, adaptable digital infrastructure. We design and implement scalable platforms that not only meet your current needs but also anticipate future growth, ensuring your business is ready to innovate and thrive in an ever-evolving digital landscape."
        image={build1}
        secondHeading="Building  Foundation for "
        secondHighlightText="Success"
        secondDescription="Our tailored platform solutions provide the backbone your business needs to excel in the digital age. From cloud migrations to cutting-edge architectures, we ensure seamless integration, scalability, and long-term stability for your IT infrastructure."
      />
      <HeroPropSecond data={data} />
      <Trusty_section />
      <NewsletterSection />
      <ContactUs />
      <Footer />
    </>
  );
}

export default BuildAndPlateform;
