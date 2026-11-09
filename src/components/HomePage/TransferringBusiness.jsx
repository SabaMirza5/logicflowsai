import { motion } from "framer-motion";
import aboutusimg from "../../assets/imgs/aboutusimg.png";
import { useNavigate } from "react-router-dom";

function TransferringBusiness({ navigateTo }) {
  const navigate = useNavigate();
  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="flex w-full justify-between items-center xl:gap-28 gap-10 px-[5%] md:flex-row flex-col md:bg-bottom bg-center bg-contain bg-no-repeat bg-none md:bg-[url('../src/assets/imgs/lines.png')] overflow-x-hidden">
      {/* Left Content */}
      <motion.div
        className="min-w-0 w-full md:flex-1 md:text-start text-center"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="     text-heading 2xl:text-[60px] xl:text-[35px] lg:text-[26px] md:text-3xl text-2xl 2xl:!leading-[1.25] xl:!leading-[1.4] md:!leading-[1.4] !leading-8 text-start">
          Transforming the Way
          <br />
          Businesses <span className="text-primary">Work With AI</span>
        </h1>

        <p className="2xl:pt-[56px] xl:pt-8 pt-5 2xl:text-lg md:text-base text-sm text-text_color 2xl:leading-[44px] !leading-8 md:text-start text-justify">
          At LogicFlowsAI, we help businesses unlock their full potential
          through intelligent AI solutions, workflow automation, and custom
          digital experiences. From streamlining everyday operations to building
          smarter, scalable systems, we turn complex challenges into efficient
          solutions. Our mission is to help businesses save time, boost
          productivity, and grow confidently in an AI-powered world.
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-primary text-center text-white lg:mt-16 md:mt-12 mt-5 w-full py-3 capitalize 2xl:py-4 rounded-[30px] hover:bg-black xl:text-lg text-sm transition-colors duration-300"
           onClick={() => navigate("/about-us")}
        >
          Discover Our Approach
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex min-w-0 items-center justify-center w-full md:flex-1"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.img
          src={aboutusimg}
          alt="LOGICFLOWSAI"
          className="rounded-[30px] max-w-full h-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </section>
  );
}

export default TransferringBusiness;
