import { motion } from "framer-motion";

import services1 from "../../assets/imgs/services1.png";
import services2 from "../../assets/imgs/services2.png";
import services3 from "../../assets/imgs/services3.png";
import services4 from "../../assets/imgs/services4.png";
import services5 from "../../assets/imgs/services5.png";
import services6 from "../../assets/imgs/services6.png";
import { useNavigate, Link } from "react-router-dom";

const servicesData = [
  {
    image: services1,
    title: "AI Agent Development",
    description:
      "Build intelligent AI agents that automate tasks, support your team, and streamline complex business processes.",
    link: "/ai-agent-development",
  },
  {
    image: services2,
    title: "AI Voice & Customer Support",
    description:
      "Deliver smarter customer experiences with AI voice assistants and automated support available around the clock.",
    link: "/ai-voice",
  },
  {
    image: services3,
    title: "AI Knowledge Base & RAG",
    description:
      "Transform your business documents and data into intelligent knowledge systems that deliver relevant, context-aware answers.",
    link: "/ai-knowledge-base",
  },
  {
    image: services4,
    title: "AI SaaS Development",
    description:
      "Turn your ideas into scalable AI-powered SaaS products with smart features tailored to your business needs.",
    link: "/ai-saas-development",
  },
  {
    image: services5,
    title: "Business Workflow Automation",
    description:
      "Automate repetitive tasks, streamline daily operations, reduce manual work, and help your team focus on growth.",
    link: "/business-workflow-automation",
  },
  {
    image: services6,
    title: "API & Software Integrations",
    description:
      "Connect your applications and business tools through seamless integrations for smoother workflows and better productivity.",
    link: "/api-integration",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function OurServices() {
  const navigate = useNavigate();
  return (
    <section
      className="2xl:pt-[200px] lg:pt-[100px] md:pt-14 pt-9 px-[5%] overflow-x-clip"
      id="services"
    >
      {/* Section Heading */}
      <motion.div
        className="flex justify-between md:flex-row flex-col lg:gap-20 md:gap-10 gap-5 md:text-start text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="md:w-1/2 w-full"
          variants={headingVariants}
        >
          <h1 className="text-heading 2xl:text-[60px] xl:text-[40px] lg:text-[26px] md:text-3xl text-2xl 2xl:!leading-[90px] xl:!leading-[60px] md:!leading-[40px] !leading-8 xl:-mt-4">
            Intelligent Solutions for
            <span className="text-primary">&nbsp;Your Business</span>
          </h1>
        </motion.div>

        <motion.div
          className="md:w-1/2 w-full"
          variants={headingVariants}
        >
          <p className="2xl:text-lg text-sm text-text_color 2xl:leading-[44px] lg:leading-7 leading-6">
            Discover AI-powered solutions designed to simplify operations,
            enhance customer experiences, and accelerate business growth.
            From intelligent AI agents to workflow automation and custom
            software integrations, we help your business work smarter.
          </p>
        </motion.div>
      </motion.div>

      {/* Services Cards  */}
      <motion.div
        className="2xl:pt-20 md:pt-10 pt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-12 xl:gap-8 md:gap-5 gap-3"
        initial="hidden"
        
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
                onClick={() => navigate(service.link)}

            className="counter cursor-pointer flex items-center text-center justify-center flex-col rounded-[30px] 2xl:py-12 xl:py-10 lg:py-10 py-5 md:px-8 px-5 bg-white hover:bg-secondary transition-colors duration-300 hover:text-white"
          >
            <div className="bg-primary 2xl:p-5 md:p-3 p-2 rounded-[30px] transition duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="transition duration-300 hover:opacity-80"
              />
            </div>

            <h2 className="2xl:text-3xl md:text-2xl text-base font-normal 2xl:pt-12 lg:pt-6 pt-4">
              {service.title}
            </h2>

            <p className="2xl:text-xl lg:text-base text-sm md:pt-3 pt-1 2xl:leading-10 lg:leading-7 leading-6">
              {service.description}
            </p>

            <Link to={service.link}>
              <button className="bg-primary text-center text-white px-16 2xl:mt-10 lg:mt-5 mt-2 py-3 capitalize 2xl:py-4 rounded-[30px] hover:bg-white hover:text-black xl:text-lg text-sm transition-colors duration-300">
                Learn More
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default OurServices;