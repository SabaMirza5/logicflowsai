import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ServiceProcess({ data }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 35,
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
      id="process"
      className="relative overflow-hidden px-[5%] py-10 md:py-28 bg-gray-50"
    >
      {/* Background Decorations */}
      <div className="absolute -top-32 right-0 w-80 h-80 bg-primary/5 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-80 h-80 bg-blue-500/5 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-5 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-primary font-bold text-xs md:text-sm tracking-[2px] uppercase">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            {data.tag || "OUR PROCESS"}
            <span className="w-8 h-[2px] bg-primary rounded-full" />
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading md:mt-5 mt-2 leading-tight">
            {data.heading}
          </h2>

          {data.description && (
            <p className="text-gray-600 text-base md:text-lg leading-8  max-w-2xl mx-auto">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-gray-200 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="w-full h-full bg-primary"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-5"
          >
            {data.steps?.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                whileHover={{ y: -8 }}
                className="group relative text-center"
              >
                {/* Number Circle */}
                <div className="relative z-10 w-[76px] h-[76px] mx-auto rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
                  <div className="w-[58px] h-[58px] rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold transition-all duration-300 group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Step Card */}
                <div className="mt-1 px-4 py-6 rounded-2xl border border-transparent group-hover:border-gray-200 group-hover:bg-white group-hover:shadow-lg transition-all duration-300 min-h-[150px]">
                  <span className="text-primary/60 text-xs font-bold tracking-[2px] uppercase">
                    STEP {index + 1}
                  </span>

                  <h3 className="text-lg md:text-xl font-bold text-heading  group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>

                  {step.description && (
                    <p className="text-gray-600 text-sm leading-7 mt-3">
                      {step.description}
                    </p>
                  )}
                </div>

                {/* Small Decorative Dot */}
                <div className="absolute top-[34px] right-[-5px] w-2 h-2 rounded-full bg-primary opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Closing Statement */}
        {data.closing && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-14 md:mt-20 max-w-4xl mx-auto text-center"
          >
            <motion.div className="flex items-center justify-center gap-2 mb-7">
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
            <p className="text-gray-600 text-base md:text-lg leading-8">
              {data.closing}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ServiceProcess;
