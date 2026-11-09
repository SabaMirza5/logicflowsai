import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function ServiceCaseStudies({ data }) {
  return (
    <section id="results" className="px-[5%] py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-wider">
            {data.tag || "OUR WORK"}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-heading ">
            {data.heading}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-7"
        >
          {data.items?.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.015,
                transition: { duration: 0.35 },
              }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* Shine Effect */}
              <motion.div
                initial={{ x: "-150%", rotate: 25 }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none"
              />

              {/* Image */}
              {item.image && (
                <div className="relative overflow-hidden h-56 z-10">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 md:p-7 p-5">
                {item.category && (
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="inline-block text-primary group-hover:text-white/80 text-sm font-semibold transition-colors duration-500"
                  >
                    {item.category}
                  </motion.span>
                )}

                <motion.h3 className="md:text-xl text-lg font-bold text-heading group-hover:text-white  transition-colors duration-500">
                  {item.title}
                </motion.h3>

                <p className="text-gray-600 group-hover:text-white/80 leading-7 mt-3 transition-colors duration-500 md:text-base text-sm md:text-left text-justify">
                  {item.description}
                </p>

                {item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm shadow-md hover:shadow-lg group/btn transition-all duration-300 group-hover:bg-white group-hover:text-secondary"
                  >
                    View Case Study
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceCaseStudies;
