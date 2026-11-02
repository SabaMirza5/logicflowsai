
import React from "react";
import { motion } from "framer-motion";

import recentangle1 from "../../assets/imgs/recentangle1.png";
import recentangle2 from "../../assets/imgs/recentangle2.png";
import recentangle3 from "../../assets/imgs/recentangle3.png";

import {
  FaBrain,
  FaRobot,
  FaPlug,
  FaExpandArrowsAlt,
  FaHeadset,
  FaCode,
} from "react-icons/fa";

const items = [
  {
    id: 1,
    icon: FaBrain,
    title: "AI Expertise",
    description:
      "Intelligent AI solutions tailored to your business needs and goals.",
  },
  {
    id: 2,
    icon: FaRobot,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and streamline everyday business operations.",
  },
  {
    id: 3,
    icon: FaPlug,
    title: "Seamless Integration",
    description:
      "Connect your existing tools, APIs, and systems for smoother workflows.",
  },
  {
    id: 4,
    icon: FaExpandArrowsAlt,
    title: "Scalable Solutions",
    description:
      "Build flexible AI-powered systems that grow alongside your business.",
  },
  {
    id: 5,
    icon: FaHeadset,
    title: "Enhanced Support",
    description:
      "Improve customer experiences with AI-powered voice and support solutions.",
  },
  {
    id: 6,
    icon: FaCode,
    title: "Custom AI Development",
    description:
      "Get custom AI agents, knowledge bases, and SaaS solutions built around your needs.",
  },
];

function UnlockBusiness() {
  return (
    <>
      {/* ========== POTENTIAL SECTION START HERE =========== */}

      <motion.section
        className="2xl:py-[200px] lg:py-[80px] md:py-12 py-9 px-[5%] w-full relative flex justify-center items-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <img
          src={recentangle1}
          alt=""
          className="absolute xl:top-16 lg:top-20 xl:left-20 left-0 lg:block hidden"
        />

        <div className="md:w-[80%] lg:w-[65%] w-full flex items-center justify-center flex-col">
          <h1 className="text-heading text-center 2xl:text-[60px] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl 2xl:!leading-[112px] xl:!leading-[70px] md:!leading-[44px] !leading-8">
            Unlock Your Business Potential with
            <br className="md:hidden block" />
            <span className="text-primary">
              {" "}Intelligent AI Solutions.
            </span>
          </h1>

          <p className="2xl:text-lg md:text-base text-sm lg:pt-5 pt-3 text-text_color 2xl:leading-[44px] lg:leading-7 leading-6 text-center">
            Discover how LogicFlowsAI helps businesses work smarter through
            intelligent automation, custom AI development, seamless
            integrations, and innovative customer support solutions.
          </p>
        </div>

        <img
          src={recentangle2}
          alt=""
          className="absolute bottom-14 2xl:right-96 xl:right-52 lg:right-28 lg:block hidden"
        />

        <img
          src={recentangle3}
          alt=""
          className="absolute 2xl:top-40 lg:top-20 2xl:right-48 lg:right-10 xl:right-20 lg:block hidden"
        />
      </motion.section>

      <section className="lg:-mt-14 px-[5%] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              className="group flex items-center md:gap-7 gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-primary/5 cursor-default"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Icon
                className="text-primary text-4xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />

              <div>
                <h1 className="text-heading 2xl:text-2xl xl:text-xl font-normal transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h1>

                <p className="text-text_color 2xl:text-base text-sm 2xl:leading-7 xl:leading-5 font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ========== POTENTIAL SECTION END HERE =========== */}
    </>
  );
}

export default UnlockBusiness;
