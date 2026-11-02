
import React from "react";
import { motion } from "framer-motion";
import { useNavigateButton } from "../../App";
import vision1 from "../../assets/imgs/vision1.png";
import value from "../../assets/imgs/value.png";
import icon1 from "../../assets/imgs/icon1.png";

function CraftingAi() {
  const { navigateTo } = useNavigateButton();

  const sections = [
    {
      id: 1,
      icon: icon1,
      title: "Our Mission",
      text: "To help businesses simplify operations, automate repetitive tasks, and achieve better results through practical AI solutions.",
    },
    {
      id: 2,
      icon: vision1,
      title: "Our Vision",
      text: "To make intelligent AI technology accessible to businesses and empower them to grow, innovate, and work smarter.",
    },
    {
      id: 3,
      icon: value,
      title: "Our Core Values",
      text: "We value innovation, reliability, and customer success, building scalable AI solutions around real business needs.",
    },
  ];

  return (
    <section className="flex justify-between 2xl:pt-[200px] lg:flex-row flex-col lg:pt-[50px] pt-10 items-center xl:gap-14 gap-10 px-[5%] md:bg-center bg-center bg-contain bg-no-repeat bg-none md:bg-[url('../src/assets/imgs/bglines.png')]">
      <motion.div
        className="lg:w-1/2 w-full md:text-start text-center"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-heading 2xl:text-[60px] xl:text-[40px] lg:text-[26px] md:text-3xl text-2xl 2xl:!leading-[112px] xl:!leading-[50px] md:!leading-[44px] !leading-8">
          Crafting the Future with <br />
          <span className="text-primary">AI</span> and Innovation
        </h1>

        <p className="2xl:pt-[56px] xl:pt-8 pt-5 2xl:text-lg md:text-base text-sm text-text_color 2xl:leading-[44px] md:!leading-8 leading-6">
          LogicFlowsAI helps businesses unlock the power of artificial
          intelligence through AI agent development, intelligent customer
          support, knowledge base solutions, custom AI SaaS applications,
          business workflow automation, and seamless software integrations.
          Our goal is to reduce manual work, improve efficiency, and help
          businesses scale with smarter technology.
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary text-center text-white mt-5 w-[60%] py-3 capitalize 2xl:py-4 rounded-[30px] hover:bg-black xl:text-lg text-sm"
          onClick={() => navigateTo("/services")}
        >
          Explore Our Solutions
        </motion.button>
      </motion.div>

      <motion.div
        className="flex items-center md:flex-row flex-col justify-center lg:w-1/2 w-full xl:gap-3 gap-2"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        <div className="rounded-[30px] 2xl:p-10 xl:p-5 lg:p-5 md:p-10 p-6 bg-primary hover:bg-secondary text-white md:w-1/2 w-full">
          <div className="flex items-center 2xl:gap-7 xl:gap-2">
            <img src={sections[0].icon} alt="" />
            <h2 className="font-normal xl:text-2xl lg:text-lg text-2xl">
              Our <br className="lg:block hidden" /> Mission
            </h2>
          </div>

          <p className="2xl:pt-8 xl:pt-4 lg:pt-3 pt-8 xl:text-base lg:text-sm text-base 2xl:leading-[42px] xl:leading-7 font-normal leading-7">
            {sections[0].text}
          </p>
        </div>

        <div className="flex items-center xl:gap-3 gap-2 md:w-1/2 w-full flex-col">
          {sections.slice(1).map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="rounded-[30px] 2xl:p-10 xl:p-5 lg:p-5 md:p-10 p-6 bg-primary hover:bg-secondary text-white"
            >
              <div className="flex items-center 2xl:gap-7 xl:gap-2">
                <img src={section.icon} alt="" />
                <h2 className="font-normal xl:text-2xl lg:text-lg text-2xl">
                  {section.title.split(" ")[0]}
                  <br className="lg:block hidden" />{" "}
                  {section.title.split(" ").slice(1).join(" ")}
                </h2>
              </div>

              <p className="2xl:pt-8 xl:pt-4 lg:pt-3 pt-8 xl:text-sm text-xs  2xl:leading-[42px] xl:leading-7 font-normal leading-7">
                {section.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default CraftingAi;
