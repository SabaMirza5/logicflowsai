import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const caseStudies = [
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    category: "AI Agent Development",
    title: "Revolutionizing Road Safety with AI",
    description:
      "Discover how AI-powered intelligent systems can improve road safety, analyze traffic patterns, and help create smarter transportation solutions.",
    link: "https://www.waymo.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    category: "AI Voice & Customer Support",
    title: "Streamlining IT Operations for Healthcare",
    description:
      "Transforming healthcare operations through intelligent automation, AI-powered support, and seamless digital solutions.",
    link: "https://www.intercom.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    category: "AI Knowledge Base & RAG",
    title: "Transforming Financial Services with AI",
    description:
      "Helping financial organizations simplify complex processes, improve data accessibility, and deliver smarter customer experiences.",
    link: "https://www.klarna.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    category: "AI SaaS Development",
    title: "Revolutionizing Education Through Technology",
    description:
      "Creating innovative AI-powered education platforms that improve learning experiences and simplify academic management.",
    link: "https://www.khanacademy.org/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85",
    category: "Business Workflow Automation",
    title: "Smart Energy Management for Sustainability",
    description:
      "Using intelligent automation and data-driven solutions to optimize energy consumption and support sustainable operations.",
    link: "https://www.n8n.io/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    category: "API & Software Integrations",
    title: "Connecting Business Systems Seamlessly",
    description:
      "Bringing business applications together through seamless integrations that improve productivity and simplify operations.",
    link: "https://zapier.com/",
  },
];

// Hero Animation
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Card Animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function AboutCaseStudy() {
  const navigate = useNavigate();

  return (
    <main className="overflow-x-clip bg-[#f7f7f7]">
      {/* ================= HERO SECTION ================= */}

      <section className="px-[5%] pt-14 md:pt-20 pb-8 md:pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-primary uppercase tracking-[3px] text-xs md:text-sm font-semibold">
            Our Success Stories
          </p>

          <h2 className="text-heading text-2xl md:text-4xl lg:text-5xl font-bold md:mt-4 mt-2">
            Real Solutions.
            <span className="text-primary"> Real Impact.</span>
          </h2>

          <p className="text-text_color text-xs md:text-base leading-6 md:leading-8 md:mt-5 mt-3 md:text-center text-justify">
            Explore how we help businesses transform their operations with
            intelligent AI solutions, automation, and innovative technologies.
            Discover practical solutions designed to solve real business
            challenges and support sustainable growth.
          </p>
        </motion.div>
      </section>

      {/* ================= CASE STUDIES SECTION ================= */}

      <section className="px-[5%] pt-5 pb-5 md:pt-10 md:pb-24">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              animate={{
                boxShadow: [
                  "0px 4px 15px rgba(0,0,0,0.03)",
                  "0px 5px 22px rgba(255,140,0,0.18)",
                  "0px 4px 15px rgba(0,0,0,0.03)",
                ],
                borderColor: [
                  "rgba(255,140,0,0.08)",
                  "rgba(255,140,0,0.65)",
                  "rgba(255,140,0,0.08)",
                ],
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
                boxShadow: "0px 12px 35px rgba(255,140,0,0.30)",
                transition: {
                  duration: 0.3,
                },
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center bg-white rounded-[25px] overflow-hidden border border-transparent`}
            >
              {/* IMAGE SIDE */}

              <div className="w-full md:w-1/2 h-[230px] sm:h-[280px] md:h-[400px] p-4 md:p-5">
                <div className="w-full h-full rounded-[18px] overflow-hidden bg-gray-100">
                  <motion.img
                    src={study.image}
                    alt={study.title}
                    loading="lazy"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* CONTENT SIDE */}

              <div className="w-full md:w-1/2 px-6 pb-7 md:px-8 md:py-8 flex flex-col items-start justify-center">
                <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
                  {study.category}
                </span>

                <h3 className="text-heading text-base md:text-2xl 2xl:text-3xl font-bold leading-snug md:mt-3 mt-1">
                  {study.title}
                </h3>

                <p className="text-text_color text-xs md:text-base md:leading-7 leading-5 md:mt-3 mt-1 md:text-left text-justify">
                  {study.description}
                </p>

                {/* READ MORE BUTTON */}

                <motion.button
                  onClick={() =>
                    window.open(study.link, "_blank", "noopener,noreferrer")
                  }
                  whileHover={{ scale: 1.06, x: 4 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-5 bg-primary text-white rounded-full px-6 py-2.5 text-sm font-medium hover:bg-secondary transition-colors duration-300 inline-flex items-center gap-3"
                >
                  Read More
                  <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutCaseStudy;
