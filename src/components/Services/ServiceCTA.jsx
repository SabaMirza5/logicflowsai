
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ServiceCTA({ data }) {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden px-[5%] py-16 md:py-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-secondary px-6 py-6 text-center text-white shadow-[0_20px_60px_rgba(87,6,197,0.18)] md:px-16 md:py-20"
      >

        {/* Background Decorations */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-primary/50 blur-3xl"
        />

        {/* Decorative Circle */}
        <div className="pointer-events-none absolute right-[10%] top-10 h-20 w-20 rounded-full border border-white/10 md:h-32 md:w-32" />

        <div className="pointer-events-none absolute bottom-8 left-[12%] h-12 w-12 rounded-full border border-white/10 md:h-20 md:w-20" />

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="relative z-10 mx-auto max-w-3xl"
        >

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90"
          >
            Let's Get Started
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold leading-tight md:text-4xl lg:text-5xl"
          >
            {data.heading}
          </motion.h2>

          {data.description && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80 md:text-base"
            >
              {data.description}
            </motion.p>
          )}

          {/* CTA Button */}
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate(data.link || "/contact-us")}
            className="group md:mt-9 mt-5 inline-flex items-center gap-3 rounded-full bg-primary px-8 md:py-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-colors duration-300 hover:bg-white hover:text-primary md:text-base"
          >
            {data.button || "Contact Us"}

            <motion.span
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <FaArrowRight />
            </motion.span>
          </motion.button>

        </motion.div>
      </motion.div>
    </section>
  );
}

export default ServiceCTA;
