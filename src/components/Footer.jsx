
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import navlogo from "../assets/imgs/navlogo.png";

const MotionLink = motion(Link);

function Footer() {
  const navigate = useNavigate();

  const scrollToSectionWithSmoothScroll = (id, route = "/") => {
    const yOffset =
      window.innerWidth >= 1024 ? 70 : window.innerWidth >= 768 ? 80 : 60;

    if (window.location.pathname === route) {
      const section = document.getElementById(id);

      if (section) {
        const yPosition =
          section.getBoundingClientRect().top + window.pageYOffset - yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(`${route}#${id}`);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      const section = document.getElementById(sectionId);

      if (section) {
        const yOffset =
          window.innerWidth >= 1024 ? 100 : window.innerWidth >= 768 ? 80 : 60;

        const yPosition =
          section.getBoundingClientRect().top + window.pageYOffset - yOffset;

        window.scrollTo({ top: yPosition, behavior: "smooth" });
      }
    }
  }, [window.location.pathname]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative overflow-hidden bg-gradient-to-b from-[#171321] via-[#0d0b13] to-[#09090d] px-[5%] py-12 text-gray-200 shadow-inner md:py-16"
      >
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent"></div>
        <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-[#5706C5]/10 blur-3xl"></div>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 xl:gap-12">
          <motion.div variants={fadeUp}>
            <div className="flex items-center justify-center text-center">
              <MotionLink
                to="/"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <img
                  src={navlogo}
                  alt="LogicFlowsAI"
                  className="w-48 max-w-full"
                />
              </MotionLink>
            </div>

            <p className="pt-5 text-center text-sm font-normal leading-7 text-gray-200">
              AI Automation · AI Agents · AI SaaS
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-primary">
              Navigations
            </h3>

            <ul className="space-y-3 pt-5 text-sm text-gray-200 lg:space-y-4">
              <li>
                <MotionLink
                  to="/"
                  onClick={() => scrollToSectionWithSmoothScroll("home")}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  className="inline-block transition-colors hover:text-[#c4a7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]"
                >
                  Home
                </MotionLink>
              </li>

              <li>
                <MotionLink
                  to="/about-us"
                  onClick={() => scrollToSectionWithSmoothScroll("aboutus")}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  className="inline-block transition-colors hover:text-[#c4a7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]"
                >
                  About Us
                </MotionLink>
              </li>

              <li>
                <MotionLink
                  to="/services"
                  onClick={() => scrollToSectionWithSmoothScroll("aboutus")}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  className="inline-block transition-colors hover:text-[#c4a7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]"
                >
                  Services
                </MotionLink>
              </li>

              <li>
                <MotionLink
                  to="/faq"
                  onClick={() => scrollToSectionWithSmoothScroll("aboutus")}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  className="inline-block transition-colors hover:text-[#c4a7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]"
                >
                  FAQ
                </MotionLink>
              </li>

              <li>
                <MotionLink
                  to="/case-studies"
                  onClick={() => scrollToSectionWithSmoothScroll("aboutus")}
                  whileHover={{ x: 5, color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                  className="inline-block transition-colors hover:text-[#c4a7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]"
                >
                  Case Studies
                </MotionLink>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-primary">
               Call us For More Info.
            </h3>

            <p className="pt-3 text-sm font-normal text-gray-200">
              Phone No: +92 308 5635114
            </p>

            <p className="pt-6 text-base font-semibold text-primary">Email:</p>

            <p className="pt-2 text-sm font-normal text-gray-200">
              hello@logicflowsai.com
            </p>

            <p className="pt-6 text-base font-semibold text-primary">
              Social Handles:
            </p>

            <div className="flex space-x-4 pt-3">
              <motion.div whileHover={{ y: -4, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <Link to="https://web.facebook.com/" aria-label="Facebook" className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]">
                  <FaFacebookSquare className="text-xl text-[#c4a7ff] transition-colors hover:text-secondary" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="https://www.instagram.com/matotogroup?igsh=MXUzaDB3Y3I3ZWNndA=="
                  aria-label="Instagram"
                  className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]"
                >
                  <FaInstagramSquare className="text-xl text-[#c4a7ff] transition-colors hover:text-secondary" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="https://www.linkedin.com/company/matotogroup/"
                  aria-label="LinkedIn"
                  className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]"
                >
                  <IoLogoLinkedin className="text-xl text-[#c4a7ff] transition-colors hover:text-secondary" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="https://x.com/matotogroup?t=FK0ysR6eFouYQuUdQQnjQw&s=08"
                  aria-label="Twitter"
                  className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c4a7ff]"
                >
                  <FaTwitterSquare className="text-xl text-[#c4a7ff] transition-colors hover:text-secondary" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-primary">Subscribe</h3>

            <p className="pt-3 text-sm font-normal leading-7 text-gray-200">
              Stay updated with our latest features and releases.
            </p>

            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full min-w-0 rounded-l-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#a78bfa] md:px-5"
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-r-full bg-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-secondary md:px-5"
              >
                Join
              </motion.button>
            </div>

            <p className="pt-4 text-xs font-normal leading-6 text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </motion.div>
        </div>
      </motion.footer>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-white/10 bg-[#07070a] px-[5%] py-6 text-center text-xs font-normal text-gray-400 md:text-sm"
      >
        Copyright © 2026 | Powered by{" "}
        <MotionLink
          to="https://logicflowsai.com/"
          whileHover={{ color: "#c4a7ff" }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          Logic Flows AI
        </MotionLink>
      </motion.div>
    </>
  );
}

export default Footer;
