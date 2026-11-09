import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import client1 from "../../assets/imgs/client1.png";
import client2 from "../../assets/imgs/client2.png";
import client3 from "../../assets/imgs/client3.png";
import client4 from "../../assets/imgs/client4.png";
import client5 from "../../assets/imgs/client5.png";
import client6 from "../../assets/imgs/client6.png";
import client7 from "../../assets/imgs/client7.png";
import client14 from "../../assets/imgs/client14.png";
import client13 from "../../assets/imgs/client13.png";
import client10 from "../../assets/imgs/client10.png";
import client11 from "../../assets/imgs/client11.png";
import client12 from "../../assets/imgs/client12.png";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const OurClient = () => {
  const slides = [
    { image: client1 },
    { image: client2 },
    { image: client3 },
    { image: client4 },
    { image: client5 },
    { image: client6 },
    { image: client7 },
    { image: client13 },
    { image: client14 },
    { image: client10 },
    { image: client11 },
    { image: client12 },
  ];

  return (
    <motion.div
      className="w-full overflow-x-clip py-[50px] lg:py-[70px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h1
        variants={containerVariants}
        className="pb-5 text-center text-2xl text-heading md:pb-10 md:text-3xl md:!leading-[44px] lg:text-[26px] xl:text-[40px] xl:!leading-[70px] 2xl:text-[60px] 2xl:!leading-[112px]"
      >
        Our Valuable Clients
      </motion.h1>

      {/* Client Slider */}
      <motion.div variants={containerVariants} className="w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          speed={3000}
          centeredSlides={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
          breakpoints={{
            1920: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="group relative flex h-20 items-center justify-center overflow-hidden rounded-3xl border border-gray-300 px-4 py-7 hover:border-primary md:h-28 md:rounded-[30px]"
            >
              <img
                src={slide.image}
                alt={`Client ${index + 1}`}
                className="slide-img transition-transform duration-300 group-hover:scale-110"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default OurClient;
