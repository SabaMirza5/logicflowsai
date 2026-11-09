import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FaStar } from "react-icons/fa";

import team1 from "../../assets/imgs/team1.png";
import team2 from "../../assets/imgs/team2.png";
import team3 from "../../assets/imgs/team3.png";
import team4 from "../../assets/imgs/team4.png";
import team5 from "../../assets/imgs/team5.jpg";
import team6 from "../../assets/imgs/team6.jpg";

function TestimonialCard({ item }) {
  const swiperSlide = useSwiperSlide();
  const isActive = swiperSlide.isActive;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0.9,
        y: isActive ? 0 : 20,
        scale: isActive ? 1 : 0.92,
        filter: isActive ? "blur(0px)" : "blur(0px)",
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: "0px 20px 40px rgba(59,130,246,0.18)",
      }}
      className="bg-white rounded-2xl p-4 md:space-y-2 space-y-1 cursor-pointer"
    >
      {item.layout === "image-first" && (
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-[300px] object-cover rounded-xl"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      )}

      <div className=" text-black">
        <h2 className="text-lg font-semibold montserrat text-primary">
          {item.name}
        </h2>

        <p className="font-normal text-secondary">{item.title}</p>
      </div>

      <p className="md:text-sm text-xs leading-5 text-text-color  text-justify">
        {item.text}
      </p>

      {item.layout === "text-first" && (
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-[300px] object-cover rounded-xl"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </motion.div>
  );
}

export default function Testimonials() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const testimonials = [
    {
      id: 1,
      name: "Moiz Qadeer",
      title: "Director & AI Strategy Lead",
      image: team1,
      layout: "image-first",
      text: "Leading AI strategy and helping organizations identify opportunities to integrate intelligent technologies into their business models for sustainable growth and innovation.",
    },
    {
      id: 2,
      name: "Zara Shafique",
      title: "Head of AI Automation",
      rating: "4.7",
      image: team2,
      layout: "text-first",
      text: "Creating automated workflows that eliminate repetitive tasks, connect business processes, and improve operational efficiency through intelligent automation.",
    },
    {
      id: 3,
      name: "Muhammad Abdullah",
      title: "Full Stack Developer",
      image: team3,
      layout: "image-first",
      text: "Engineering reliable web applications and scalable software platforms that deliver smooth user experiences and support complex business requirements.",
    },
    {
      id: 4,
      name: "Noor Fatima",
      title: "Business Development Officer",
      image: team4,
      layout: "text-first",
      text: "Identifying new business opportunities, understanding client requirements, and connecting organizations with technology solutions aligned with their goals.",
    },
    {
      id: 5,
      name: "Ismail Aamir",
      title: "Generative AI Animator",
      image: team5,
      layout: "image-first",
      text: "Creating AI-generated animations, visual content, and engaging digital experiences using generative AI technologies to bring creative concepts to life.",
    },
    {
      id: 6,
      name: "Muhammad Zunaid Sultan",
      title: "Mobile & Web App Developer",
      image: team6,
      layout: "text-first",
      text: "Developing responsive mobile and web applications with intuitive interfaces, seamless functionality, and reliable integrations to deliver engaging digital experiences.",
    },
  ];

  return (
    <section className="bg-white p-[5%] overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-xl montserrat md:text-3xl xl:text-4xl font-bold text-black">
          Minds Behind <span className="text-primary">Logic Flows</span> !
        </h3>

        <p className="md:mt-4 mt-2 text-sm md:text-base text-text-color md:text-center text-justify">
          Our team brings together expertise in AI automation, software
          development, and business strategy to build intelligent solutions{" "}
          <br className="lg:block hidden" /> that solve real-world challenges.
          We collaborate to turn complex ideas into practical systems that help
          businesses work smarter and grow.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:mt-10 mt-5"
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          grabCursor={true}
          spaceBetween={10}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
