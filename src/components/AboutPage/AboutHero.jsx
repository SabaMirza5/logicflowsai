
import React from "react";
import { motion } from "framer-motion";
import { useNavigateButton } from "../../App";
import recentangle1 from "../../assets/imgs/recentangle1.png";
import recentangle2 from "../../assets/imgs/recentangle2.png";
import recentangle3 from "../../assets/imgs/recentangle3.png";
import aboutuspagehero from "../../assets/imgs/aboutuspagehero.png";

function AboutHero() {
  const { navigateTo } = useNavigateButton();

  return (
    <>
      <section className="xl:py-12 lg:py-[60px] md:py-8 py-5 px-[5%] w-full relative flex justify-center items-center">
        <motion.img
          src={recentangle1}
          alt=""
          initial={{ opacity: 0, x: -40, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute xl:top-28 md:top-12 xl:left-20 left-0 lg:block hidden"
        />

        <div className="md:w-[80%] lg:w-[65%] w-full flex items-center justify-center flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-heading text-center 2xl:text-[60px] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl 2xl:!leading-[112px] xl:!leading-[70px] md:!leading-[44px] !leading-8"
          >
            Transforming Businesses with{" "}
            <span className="text-primary">Intelligent AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="2xl:text-lg md:text-base text-sm lg:pt-5 pt-3 text-text_color 2xl:leading-[44px] lg:leading-7 leading-6   md:text-center text-justify"
          >
            At LogicFlowsAI, we help businesses work smarter through AI agents,
            intelligent customer support, knowledge base solutions, and
            workflow automation. We build scalable AI-powered solutions and
            seamless software integrations that simplify operations, improve
            efficiency, and support business growth.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-center text-white xl:w-[50%] w-full py-3 capitalize 2xl:py-4 rounded-[30px] hover:bg-black xl:text-lg text-sm mt-7"
            onClick={() => navigateTo("/contact-us")}
          >
            get started
          </motion.button>
        </div>

        <motion.img
          src={recentangle2}
          alt=""
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute bottom-1 2xl:right-96 xl:right-52 lg:right-10 lg:block hidden"
        />

        <motion.img
          src={recentangle3}
          alt=""
          initial={{ opacity: 0, x: 40, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute 2xl:top-20 xl:top-10 lg:top-2 2xl:right-48 lg:right-10 xl:right-20 lg:block hidden"
        />
      </section>

      <div className="">
        <img src={aboutuspagehero} alt="" />
      </div>
    </>
  );
}

export default AboutHero;
