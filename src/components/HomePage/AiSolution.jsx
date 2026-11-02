
import { motion } from "framer-motion";
import herbg2 from "../../assets/imgs/herbg2.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function AiSolution() {
  return (
    <section className="relative flex items-center justify-center overflow-x-clip px-[5%] pt-[5%] text-center lg:pt-[100px] 2xl:pt-[200px]">

      {/* Background Image */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={herbg2}
          alt="Intelligent AI Solutions"
          className="block h-auto w-full"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="absolute left-2 right-2 top-[30%] z-10 text-white md:top-[40%]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h1
          variants={textVariants}
          className="text-xl font-bold md:text-4xl lg:text-6xl"
        >
          INTELLIGENT AI SOLUTIONS
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="mt-0 text-sm md:mt-3 md:text-xl lg:text-2xl"
        >
          AUTOMATION · AI AGENTS · AI SAAS
        </motion.p>
      </motion.div>
    </section>
  );
}

export default AiSolution;
