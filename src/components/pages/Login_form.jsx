import React from "react";
import formlogo from '../../assets/imgs/formlogo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Login_form() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#EBEBEB] md:py-10 py-5 md:px-10 px-5">
      <div className="bg-white shadow-lg rounded-lg flex xl:max-w-6xl  w-full md:flex-row flex-col ">
       
        <div
          className="flex flex-col justify-end items-center bg-it-bg bg-cover bg-no-repeat bg-center text-black lg:p-10 p-5 md:w-1/2 rounded-l-lg w-full md:rounded-r-none rounded-r-lg"
          
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            <SwiperSlide>
              <div className="text-start">
                <h2 className="xl:text-[40px]  lg:text-[36px] md:text-2xl text-xl text-white poppins font-bold mb-4 lg:!leading-[50px] md:leading-8">
                Join Us and Unlock Your <span className="text-primary">IT Potential</span>
                </h2>
                <p className="lg:text-lg md:text-sm text-xs text-white  font-medium poppins">
                Register now to gain access to innovative solutions, expert guidance, and tailored services designed to meet your business’s unique challenges and drive success.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            
               <div className="text-start">
                <h2 className="xl:text-[40px]  lg:text-[36px] md:text-2xl text-xl text-white poppins font-bold mb-4 lg:!leading-[50px] md:leading-8">
                Tailored IT Services for <span className="text-primary">Your Business</span>
                </h2>
                <p className="lg:text-lg md:text-sm text-xs text-white  font-medium poppins">
                Register now to gain access to innovative solutions, expert guidance, and tailored services designed to meet your business’s unique challenges and drive success.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-start">
                <h2 className="xl:text-[40px]  lg:text-[36px] md:text-2xl text-xl text-white poppins font-bold mb-4 lg:!leading-[50px] md:leading-8">
                Your Partner in <span className="text-primary">Innovation</span>
                </h2>
                <p className="lg:text-lg md:text-sm text-xs text-white  font-medium poppins">
                Register now to gain access to innovative solutions, expert guidance, and tailored services designed to meet your business’s unique challenges and drive success.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
        {/* Right Side - Form */}
        <div className="lg:p-10 md:p-5 p-3 w-full md:w-1/2">
          <div className="text-center ">
            <a href="" className="flex items-center justify-center">
            <img src={formlogo} alt="" className=""/>
            </a>
            <h2 className="xl:text-[31px] md:text-xl text-base xl:!leading-10 md:!leading-7 font-semibold text-gray-800 poppins pt-5">
            Claim Your Complimentary <br /> <span className=" text-primary ">IT Assessment</span> Today!
            </h2>
          </div>
          <form className="lg:space-y-4 md:!pt-10 !pt-4 space-y-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />
             <input
              type="email"
              placeholder="Email"
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />
           
           <input
              type="tel"
              placeholder="Phone Number"
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />
            
            <textarea
              placeholder="What's Your Biggest IT Challenge?"
              className="w-full pt-4 ps-5 bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none resize-none font-medium lg:text-base text-xs"
              rows="4"
            />
            <div className="lg:!mt-8 md:!mt-6 !mt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white  lg:py-4 py-3 rounded-[30px] font-medium hover:bg-green-600 transition duration-300 lg:text-base text-xs"
            >
              SUBMIT
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    </>
  );
}

export default Login_form;
