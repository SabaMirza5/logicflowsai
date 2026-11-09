import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ServiceCards({ data }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 25,
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
    <section
      id="what-we-build"
      className="relative overflow-hidden px-[5%] py-10 md:py-28 bg-gray-50"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-10 md:mb-16 "
        >
          <span className="inline-flex items-center gap-2 text-primary font-bold text-xs md:text-sm tracking-[2px] uppercase">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            {data.tag || "OUR SOLUTIONS"}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading md:mt-5  mt-3 leading-tight">
            {data.heading}
          </h2>

          {data.description && (
            <p className="text-gray-600 text-base md:text-lg leading-8 mt-5 max-w-2xl">
              {data.description}
            </p>
          )}
        </motion.div>

        {/* Solution Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {data.items?.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative bg-white rounded-2xl p-7 md:p-8 pt-9 border border-gray-200/80 hover:border-primary/50 shadow-[0_5px_25px_rgba(0,0,0,0.025)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "left" }}
                className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-2xl"
              />

              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                {item.icon && (
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: -6,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-7 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                  >
                    <item.icon />
                  </motion.div>
                )}

                {/* Card Number */}
                <span className="block text-xs font-bold tracking-[2px] text-gray-300 mb-3 group-hover:text-primary/60 transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-heading leading-snug group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-7 text-sm md:text-base mt-4">
                  {item.description}
                </p>

                {/* Learn More */}
                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-3 text-primary font-semibold text-sm mt-7 group/link"
                  >
                    <span>Learn More</span>

                    <motion.span
                      className="inline-flex"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </a>
                )}
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full border border-primary/10 group-hover:scale-150 group-hover:border-primary/20 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Statement */}
        {data.closing && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-heading font-semibold text-base md:text-lg leading-8 mt-14 max-w-4xl mx-auto"
          >
            {data.closing}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export default ServiceCards;
