

import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import heroimg1 from "../../assets/imgs/heroimg1.png";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Hero() {
  const [counterStart, setCounterStart] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="flex flex-col-reverse items-stretch justify-between gap-10 pl-[5%] lg:pr-0 pr-[5%]  pt-9 md:pt-14 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-20 lg:pt-[50px]">
      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col lg:w-1/2"
      >
        <motion.h1
          variants={itemVariants}
          className="text-heading 2xl:text-[60px] xl:text-[35px] lg:text-[26px] md:text-3xl text-2xl 2xl:!leading-[1.25] xl:!leading-[1.4] md:!leading-[1.4] !leading-8 text-center lg:text-start"
        >
          Your Business Runs...
          <br />
          <span className="text-primary">AI Handles</span> the Work!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="2xl:pt-2 xl:pt-2 pt-3 2xl:text-lg md:text-base text-sm text-text_color 2xl:leading-[44px] lg:leading-8 leading-7 md:text-center lg:text-start text-justify"
        >
          Transform the way your business operates with intelligent AI agents,
          powerful automation workflows, and custom AI SaaS solutions. Logic
          Flows helps you eliminate repetitive tasks, connect your tools, and
          scale your business with smarter systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center md:gap-5 gap-3 xl:flex-row flex-col 2xl:pt-3 xl:pt-5 pt-5"
        >
          <button onClick={() => navigate("/services")} className="bg-secondary text-center text-white xl:w-1/2 w-full py-3 capitalize 2xl:py-4 rounded-[30px] hover:bg-primary transition-colors xl:text-base text-sm">
            Explore Our Services
          </button>

          <button onClick={() => navigate("/contact-us")}  className="bg-black text-center text-white w-full xl:w-1/2 py-3 capitalize 2xl:py-4 rounded-[30px] hover:bg-primary transition-colors xl:text-base text-sm">
            START YOUR JOURNEY WITH US
          </button>
        </motion.div>

        {/* Counters */}
        <ScrollTrigger
          onEnter={() => setCounterStart(true)}
          onExit={() => setCounterStart(false)}
          className="2xl:pt-10 md:pt-5 pt-5"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 text-black lg:gap-5 gap-3"
          >
            <motion.div
              variants={itemVariants}
              className="rounded-[30px] flex items-center flex-col justify-center counter text-center p-6"
            >
              <h2 className="text-heading 2xl:text-6xl lg:text-3xl xl:text-4xl text-4xl font-bold">
                {counterStart && <CountUp start={0} end={50} duration={2} />}+
              </h2>

              <p className="text-text_color 2xl:text-lg xl:text-base text-sm pt-2 capitalize">
                AI & Automation Tools
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[30px] flex items-center flex-col justify-center counter text-center p-6"
            >
              <h2 className="text-heading 2xl:text-6xl lg:text-3xl xl:text-4xl text-4xl font-bold">
                {counterStart && <CountUp start={0} end={6} duration={2} />}+
              </h2>

              <p className="text-text_color 2xl:text-lg xl:text-base text-sm pt-2 capitalize">
                Core Service Categories
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[30px] flex items-center flex-col justify-center counter text-center p-6"
            >
              <h2 className="text-heading 2xl:text-6xl lg:text-3xl xl:text-4xl text-4xl font-bold">
                {counterStart && <CountUp start={0} end={20} duration={2} />}+
              </h2>

              <p className="text-text_color 2xl:text-lg xl:text-base text-sm pt-2 capitalize">
                Strategic Partnerships
              </p>
            </motion.div>
          </motion.div>
        </ScrollTrigger>
      </motion.div>

      {/* Right Image - Top Aligned */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="flex w-full items-start justify-center lg:w-1/2 lg:self-stretch"
      >
        <motion.img
          src={heroimg1}
          alt="AI-powered business automation"
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="block h-auto w-full object-contain object-top"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
