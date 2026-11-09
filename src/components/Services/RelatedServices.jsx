
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function RelatedServices({ data }) {
  return (
    <section className="relative overflow-hidden bg-white px-[5%] py-16 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Discover More
          </span>

          <div className=" flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-heading md:text-4xl">
              {data.heading || "Explore Our Other Services"}
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-500 md:text-base">
              Explore our range of solutions designed to help your business
              work smarter and grow faster.
            </p>
          </div>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-gray-200">
          {data.items?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <Link
                to={item.link}
                className="group relative flex items-center justify-between gap-5 overflow-hidden border-b border-gray-200  transition-all duration-300 py-5"
              >
                {/* Hover Background */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary/[0.04] to-transparent transition-transform duration-500 group-hover:translate-x-0" />

                {/* Content */}
                <div className="relative flex items-center gap-5 md:gap-8">

                  <span className="text-sm font-medium tabular-nums text-gray-400 transition-colors duration-300 group-hover:text-primary">
                    0{index + 1}
                  </span>

                  <h3 className="text-sm  font-semibold text-heading transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary md:text-2xl">
                    {item.title}
                  </h3>

                </div>

                {/* Arrow */}
                <motion.span
                  whileHover={{ rotate: -45 }}
                  className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white md:h-14 md:w-14"
                >
                  <FaArrowRight className="text-sm md:text-base" />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default RelatedServices;
