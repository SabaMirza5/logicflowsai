import React from "react";
import { motion } from "framer-motion";
import { useNavigateButton } from "../App";

function NewsletterSection() {
  const { navigateTo } = useNavigateButton();

  return (
    <section>
      <div className="md:px-0 px-[5%]  bg-cover flex-col bg-no-repeat bg-center bg-[url('../src/assets/imgs/bgcontact.png')] md:p-40 p-20">
        <div className="px-[5%]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white 2xl:text-[66px] xl:text-[50px] lg:text-[30px] text-2xl capitalize font-bold"
          >
            We’d love to <span className="text-secondary">hear</span> from you
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="2xl:text-xl md:text-base text-sm lg:pt-5 pt-3 text-white 2xl:leading-[50px] lg:leading-7 leading-6 "
          >
            We're here to help with any questions, support, or project
            inquiries. Reach out to our team, and let's start a{" "}
            <br className="lg:block hidden" />
            conversation about how we can collaborate to achieve your goals.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-secondary text-center text-white lg:mt-6  mt-5 md:w-[30%] w-full py-3 uppercase 2xl:py-4 rounded-[30px] hover:bg-white hover:text-black xl:text-lg text-sm"
            onClick={() => navigateTo("/contact-us")}
          >
            get started
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
