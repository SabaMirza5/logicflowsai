

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

function ServiceProblems({ data }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="overview"
      className="relative overflow-hidden px-[5%] py-20 md:py-28 bg-white"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-primary font-bold text-xs md:text-sm tracking-[2px] uppercase">
                <span className="w-8 h-[2px] bg-primary rounded-full" />
                {data.tag || "IS THIS FOR YOU?"}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-2xl  md:text-5xl font-bold text-heading md:mt-6 mt-2 leading-[1.2]"
            >
              {data.heading}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="w-20 h-1 bg-primary rounded-full md:mt-7 mt-3"
            />

            <motion.p
              variants={fadeUp}
              className="text-gray-500 leading-8 mt-7 text-sm md:text-lg md:text-left text-justify"
            >
              Identify the challenges holding your business back and discover
              how intelligent solutions can help your team work smarter, faster,
              and more efficiently.
            </motion.p>
          </motion.div>

          {/* Right Checklist */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            {data.items?.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{
                  x: 6,
                  transition: { duration: 0.25 },
                }}
                className="group flex gap-4 items-start p-5 md:p-6 rounded-2xl border border-gray-100 bg-white shadow-[0_5px_25px_rgba(0,0,0,0.035)] hover:border-primary/30 hover:shadow-[0_10px_35px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-0.5 shrink-0"
                >
                  <FaCheckCircle className="text-primary text-xl" />
                </motion.div>

                <p className="text-gray-600 text-sm md:text-base leading-7 group-hover:text-heading transition-colors duration-300">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Closing Statement */}

        {data.closing && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mt-10 md:mt-20 overflow-hidden rounded-2xl bg-[#07111f] px-7 py-7 md:px-14 md:py-14 text-center"
          >
            {/* Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-32 -right-20 w-72 h-72 rounded-full bg-primary/30 blur-[100px]"
            />

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-blue-500/20 blur-[100px]"
            />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Animated Accent */}
              <motion.div className="flex items-center justify-center gap-2 md:mb-7 mb-3">
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 45 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-[2px] bg-primary rounded-full"
                />

                <motion.span
                  animate={{
                    scale: [1, 1.4, 1],
                    boxShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 12px rgba(255,255,255,0.7)",
                      "0 0 0px rgba(255,255,255,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2.5 h-2.5 rounded-full bg-primary"
                />

                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 45 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-[2px] bg-primary rounded-full"
                />
              </motion.div>

              {/* Closing Text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white text-lg md:text-2xl font-semibold leading-relaxed"
              >
                {data.closing}
              </motion.p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ServiceProblems;
