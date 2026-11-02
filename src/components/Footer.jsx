
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
        className="bg-white p-[5%]  text-gray-700 relative shadow-inner"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gray-300 to-transparent opacity-50"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 md:gap-8 gap-6">
          <motion.div variants={fadeUp}>
            <div className="flex items-center justify-center">
              <Link to="/">
                <img
                  src={navlogo}
                  alt="LogicFlowsAI"
                  className="w-full"
                />
              </Link>
            </div>

            <p className="text-text_color pt-5 font-normal text-base leading-[30px]">
              AI Automation · AI Agents · AI SaaS
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-xl font-medium text-primary">
              Navigations
            </h3>

            <ul className="lg:space-y-5 space-y-2 text-text_color lg:pt-[30px] pt-2">
              <li className="hover:text-primary">
                <Link
                  to="/"
                  onClick={() => scrollToSectionWithSmoothScroll("home")}
                >
                  Home
                </Link>
              </li>

              <li className="hover:text-primary">
                <Link
                  to="/about-us"
                  onClick={() => scrollToSectionWithSmoothScroll("aboutus")}
                >
                  About Us
                </Link>
              </li>

              <li className="hover:text-primary">
                 <Link
                  to="/services"
                  onClick={() => scrollToSectionWithSmoothScroll("aboutus")}
                >
               Services
                </Link>
               
              </li>

              <li className="hover:text-primary">
               <Link
                  to="/faq"
                  onClick={() => scrollToSectionWithSmoothScroll("aboutus")}
                >
               FAQ
                </Link>
              </li>

              <li>
               <Link
                  to="/case-study"
                  onClick={() => scrollToSectionWithSmoothScroll("aboutus")}
                >
               Case Studies
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium text-primary">
              For More Info.
            </h3>

            <p className="text-base font-normal text-text_color pt-[10px]">
              Call us: +92 308 5635114
            </p>

            <p className="text-xl font-medium text-primary pt-8">Email:</p>

            <p className="text-base font-normal text-text_color lg:pt-[10px] pt-1">
              hello@logicflowsai.com
            </p>

            <p className="text-xl font-medium text-primary lg:pt-11 pt-5">
              Social Handles:
            </p>

            <div className="flex space-x-[15px] pt-[5px]">
              <motion.div whileHover={{ y: -4, scale: 1.1 }}>
                <Link to="https://web.facebook.com/" aria-label="Facebook">
                  <FaFacebookSquare className="text-primary text-xl hover:text-secondary" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.1 }}>
                <Link
                  to="https://www.instagram.com/matotogroup?igsh=MXUzaDB3Y3I3ZWNndA=="
                  aria-label="Instagram"
                >
                  <FaInstagramSquare className="text-primary text-xl hover:text-secondary" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.1 }}>
                <Link
                  to="https://www.linkedin.com/company/matotogroup/"
                  aria-label="LinkedIn"
                >
                  <IoLogoLinkedin className="text-primary text-xl hover:text-secondary" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.1 }}>
                <Link
                  to="https://x.com/matotogroup?t=FK0ysR6eFouYQuUdQQnjQw&s=08"
                  aria-label="Twitter"
                >
                  <FaTwitterSquare className="text-primary text-xl hover:text-secondary" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-[22px] text-primary font-normal">Subscribe</h3>

            <p className="text-text_color text-sm font-normal leading-8 lg:pt-[22px] pt-2">
              Stay updated with our latest features and releases.
            </p>

            <div className="flex mt-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-[30px] py-[10px] rounded-l-[30px] bg-[#EBEBEB] border border-gray-300 text-text_color text-base outline-none"
              />

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-primary text-base font-normal text-white md:px-5 px-3 py-[10px] rounded-r-[30px]"
              >
                Join
              </motion.button>
            </div>

            <p className="text-text_color text-sm font-normal leading-8 pt-[22px]">
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
        className="py-7 text-center md:text-lg text-xs bg-black text-white font-normal"
      >
        Copyright © 2026 | Powered by{" "}
        <Link to="https://logicflowsai.com/">
          Logic Flows AI
        </Link>
      </motion.div>
    </>
  );
}

export default Footer;
