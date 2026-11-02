
import { motion } from "framer-motion";
import {
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function CaseStudyPage() {
  const navigate = useNavigate();

  return (
    <main className="relative overflow-x-clip">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('../src/assets/imgs/faqbg.png')] bg-cover bg-center bg-no-repeat" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Hero Section */}
      <section className="relative z-10 px-[5%] pt-20 pb-16 md:pt-28 md:pb-24 text-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary uppercase tracking-[3px] text-xs md:text-sm font-semibold"
          >
            Our Case Studies
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mt-5"
          >
            Real Business Challenges.
            <span className="text-primary"> Smarter AI Solutions.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/80 text-sm md:text-lg leading-7 md:leading-9 max-w-3xl mx-auto mt-6"
          >
            Explore how intelligent AI solutions, automation, and software
            integrations can help businesses simplify operations, improve
            productivity, and build better customer experiences.
          </motion.p>

          <motion.button
            variants={fadeUp}
            onClick={() => navigate("/contact-us")}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary text-white px-7 py-3 md:px-9 md:py-4 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Discuss Our Project <FaArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}

export default CaseStudyPage;