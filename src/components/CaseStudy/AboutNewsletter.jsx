import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function AboutNewsletter() {
  const navigate = useNavigate();

  return (
    <section className="px-[5%] py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="rounded-[30px] bg-secondary text-white text-center px-6 py-12 md:px-16 md:py-16"
      >
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          Ready to Transform Your Business?
        </h2>

        <p className="text-white/80 text-sm md:text-base leading-7 max-w-2xl mx-auto mt-5">
          Let's discuss your challenges and explore how AI agents, automation,
          and intelligent integrations can help your business work smarter.
        </p>

        <button
          onClick={() => navigate("/contact-us")}
          className="mt-8 inline-flex items-center gap-3 bg-primary text-white rounded-full px-8 py-3 md:py-4 hover:bg-white hover:text-black transition-colors duration-300"
        >
          Get in Touch
          <FaArrowRight />
        </button>
      </motion.div>
    </section>
  );
}

export default AboutNewsletter;
