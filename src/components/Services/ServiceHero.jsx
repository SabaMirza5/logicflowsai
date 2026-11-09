

import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ServiceHero({ data }) {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
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

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#08080b] via-[#15131b] to-[#241b30] px-[5%] py-24 text-white md:py-32">

      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute w-[350px] h-[350px] bg-primary/30 blur-[120px] rounded-full top-[-100px] left-1/2 -translate-x-1/2 pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="absolute w-[300px] h-[300px] bg-purple-200/20 blur-[120px] rounded-full bottom-[-150px] right-[-100px] pointer-events-none"
      />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center"
      >
        {/* Tag */}
        {data.tag && (
          <motion.span
            variants={fadeUp}
            className="inline-block font-semibold text-sm md:text-base tracking-[3px] uppercase md:mb-6 mb-2 text-white/90"
          >
            {data.tag}
          </motion.span>
        )}

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-2xl  md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl"
        >
          {data.heading}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-white/70 md:text-center text-justify  text-sm md:text-lg leading-8 mt-6 max-w-3xl"
        >
          {data.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap  justify-center items-center gap-4 mt-9"
        >
          <button
            onClick={() => navigate(data.contactLink || "/contact-us")}
            className="group inline-flex justify-center gap-3 bg-primary text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 md:w-auto w-full flex- items-center"
          >
            {data.primaryButton || "Contact Us"}

            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {data.secondaryButton && (
            <a
              href={data.secondaryLink || "#case-studies"}
              className="group md:w-auto w-full inline-flex items-center gap-3 border border-white/40 px-7 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300  justify-center" 
            >
              {data.secondaryButton}

              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ServiceHero;
