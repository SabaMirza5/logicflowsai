

import React, { useState } from "react";
import { motion } from "framer-motion";

import ServiceHero from "./ServiceHero";
import ServiceTrustBar from "./ServiceTrustBar";
import ServiceProblems from "./ServiceProblems";
import ServiceCards from "./ServiceCards";
import ServiceProcess from "./ServiceProcess";
import ServiceCaseStudies from "./ServiceCaseStudies";
import ServiceIntegrations from "./ServiceIntegrations";
import ServiceFAQ from "./ServiceFAQ";
import ServiceCTA from "./ServiceCTA";
import RelatedServices from "./RelatedServices";

function ServiceLayout({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (item, index) => {
    setActiveTab(index);

    const target = document.querySelector(item.href);

    if (target) {
      const tabNavigation = document.getElementById("service-tab-navigation");
      const navigationBottom = tabNavigation?.getBoundingClientRect().bottom ?? 0;
      const targetPosition =
        window.scrollY +
        target.getBoundingClientRect().top -
        navigationBottom -
        20;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Service Tab Navigation */}
      <div id="service-tab-navigation" className="sticky xl:top-24 lg:top-20 md:top-16 top-16 z-40 w-full md:px-[5%] py-3 left-0">
        <div className="md:mr-auto mr-0 md:max-w-max w-full">
          <div className="flex items-center md:gap-1 gap-0 overflow-x-auto whitespace-nowrap rounded-full border border-primary/20 bg-primary p-1.5 shadow-lg backdrop-blur-xl scrollbar-hide">

            {data.navigation?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(item, index)}
                className={`relative md:px-5 px-2 md:py-2.5 py-2 md:text-sm text-[10px] font-semibold rounded-full transition-colors duration-300 shrink-0 ${
                  activeTab === index
                    ? "text-primary"
                    : "text-white hover:text-white/80"
                }`}
              >
                {activeTab === index && (
                  <motion.span
                    layoutId="activeServiceTab"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {item.label}
                </span>
              </button>
            ))}

          </div>
        </div>
      </div>

      {/* Service Sections */}
      <ServiceHero data={data.hero} />

      {data.trust && <ServiceTrustBar data={data.trust} />}

      {data.problems && <ServiceProblems data={data.problems} />}

      {data.build && <ServiceCards data={data.build} />}

      {data.process && <ServiceProcess data={data.process} />}

      {data.caseStudies && (
        <ServiceCaseStudies data={data.caseStudies} />
      )}

      {data.integrations && (
        <ServiceIntegrations data={data.integrations} />
      )}

      {data.faqs && <ServiceFAQ data={data.faqs} />}

      {data.cta && <ServiceCTA data={data.cta} />}

      {data.relatedServices && (
        <RelatedServices data={data.relatedServices} />
      )}
    </>
  );
}

export default ServiceLayout;
