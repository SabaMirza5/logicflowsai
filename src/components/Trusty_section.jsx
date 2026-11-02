import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import client1 from "../assets/imgs/client1.png";
import client2 from "../assets/imgs/client2.png";
import client3 from "../assets/imgs/client3.png";
import client4 from "../assets/imgs/client4.png";
import client5 from "../assets/imgs/client5.png";
import client6 from "../assets/imgs/client6.png";
import client7 from "../assets/imgs/client7.png";
import client14 from "../assets/imgs/client14.png";
import client13 from "../assets/imgs/client13.png";
import client10 from "../assets/imgs/client10.png";
import client11 from "../assets/imgs/client11.png";
import client12 from "../assets/imgs/client12.png";

// import SwiperCore, { Autoplay, FreeMode } from "swiper";

const Trusty_section = () => {
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
    <div className="w-full lg:py-[70px] py-[50px] "  >
      <h1 className="text-heading  md:pb-10  pb-5 text-center 2xl:text-[60px] xl:text-[40px] lg:text-[26px] md:text-3xl text-2xl 2xl:!leading-[112px] xl:!leading-[70px] md:!leading-[44px] !leading-8 " >
        Our Valuable Clients
      </h1>
      <Swiper
      
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        // freemodemomentum={true}
        // FreeMode={true}
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
            className="relative overflow-hidden group border border-gray-300 px-4 py-7 md:rounded-[30px] rounded-3xl hover:border hover:border-primary flex justify-center items-center md:h-28 h-20"
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="   group-hover:scale-110 slide-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trusty_section;
