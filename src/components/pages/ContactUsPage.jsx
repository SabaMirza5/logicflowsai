import { useState } from "react";
import { motion } from "framer-motion";
import contactusbg from "../../assets/imgs/contactusbg.png";
import ContactUs from "../ContactUs";

const ContactUsPage = () => {
  return (
    <>
      <main className="bg-white overflow-hidden">
     
        <section className="relative bg-[#101010] text-white px-[5%] pt-28 pb-28 md:pt-36 md:pb-36 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,140,0,0.16),transparent_35%)]" />

          <div className="relative  mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#ff8c00] uppercase tracking-[4px] text-sm font-semibold">
                Contact Our Team
              </p>

              <h1 className="text-2xl  md:text-6xl font-bold md:mt-6 mt-2 leading-[1.12]">
                Let's Turn Your
                <span className="text-[#ff8c00]"> Ideas </span>
                Into Intelligent Solutions.
              </h1>

              <p className="text-gray-400 max-w-xl text-sm md:text-lg leading-8 md:mt-8 mt-3">
                Have a challenge to solve or an idea to explore? Tell us what
                you're working on. We'd love to hear from you.
              </p>

              <div className="flex items-center gap-3 text-sm text-gray-300 mt-8">
                <span className="w-2.5 h-2.5 bg-[#ff8c00] rounded-full animate-pulse" />
                Ready to discuss your next project
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="absolute w-[70%] h-[70%] bg-[#ff8c00]/20 blur-[100px] rounded-full" />

              <img
                src={contactusbg}
                alt="AI technology and business solutions"
                className="relative w-full max-w-[550px] h-[300px] sm:h-[400px] lg:h-[480px] object-contain"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <ContactUs />
    </>
  );
};

export default ContactUsPage;
