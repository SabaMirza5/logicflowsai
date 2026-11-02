import React, { useState } from "react";
import Navbar from "../Navbar";
import award1 from "../../assets/imgs/award1.png";
import award2 from "../../assets/imgs/award2.png";
import award3 from "../../assets/imgs/award3.png";
import award4 from "../../assets/imgs/award4.png";
import award5 from "../../assets/imgs/award5.png";
import award6 from "../../assets/imgs/award6.png";
import award7 from "../../assets/imgs/award7.png";
import award8 from "../../assets/imgs/award8.png";
import award9 from "../../assets/imgs/award9.png";
import award10 from "../../assets/imgs/award10.png";
import award11 from "../../assets/imgs/award11.png";
import award12 from "../../assets/imgs/award12.png";
import awardhero2 from "../../assets/imgs/awardhero2.png";
import kit1 from "../../assets/imgs/kit1.png";
import kit2 from "../../assets/imgs/kit2.png";
import kit3 from "../../assets/imgs/kit3.png";
import kit4 from "../../assets/imgs/kit4.png";
import kit5 from "../../assets/imgs/kit5.png";
import kit6 from "../../assets/imgs/kit6.png";
import Trusty_section from "../Trusty_section";
import NewsletterSection from "../NewsletterSection";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import { useNavigateButton } from "../../App";


function AwardPage() {
  const { navigateTo } = useNavigateButton();

  const partnersData = [
    { image: award3, title: "iSHERIFF GOLD Partner" },
    { image: award4, title: "ESET Partner" },
    { image: award5, title: "FORTINET Partner" },
    { image: award6, title: "Sage One Partner" },
    { image: award7, title: "entensys Partner" },
    { image: award8, title: "Nagios Partner" },
    { image: award9, title: "SONICWALL Partner" },
    { image: award10, title: "CYBER SENTRY Partner" },
    { image: award11, title: "Sage One Partner" },
    { image: award12, title: "iSHERIFF GOLD Partner" },
    { image: award1, title: "vmware Partner" },
    { image: award2, title: "HP business Partner" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  const services = [
    {
      title: "Teamviewer (Remote Support)",
      description:
        "Connect and control devices remotely with ease. TeamViewer enables seamless access and support anytime, anywhere.",
      padding: "xl:pl-16 pl-6",
    },
    {
      title: "AnyDesk (Remote Support)",
      description:
        "Fast and reliable remote access. AnyDesk ensures quick connections for seamless support and collaboration.",
      padding: "xl:pl-16 lg:pt-12 md:pt-6 pl-6 pt-7",
    },
    {
      title: "iP Scanner",
      description:
        "Efficient Network Scanning and Monitoring. IP Scanner helps you identify and manage devices on your network with ease.",
      padding: "xl:pl-16  pl-6 pt-4  xl:pt-6 lg:pt-12 md:pt-5",
    },
    {
      title: "CCleaner",
      description:
        "Clean and optimize your system for better performance with CCleaner.",
      padding: "xl:pl-16  pl-6 pt-4  xl:pt-8 lg:pt-12 md:pt-5",
    },
    {
      title: "7-ZIP",
      description:
        "Powerful file compression and extraction. 7-Zip provides efficient and high-quality file management for all your needs.",
      padding: "xl:pl-16  pl-6 pt-6  xl:pt-10 lg:pt-14 md:pt-10",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="flex justify-center text-center h-screen items-center   bg-center  bg-no-repeat bg-[url('../src/assets/imgs/awardhero.png')]">
        <div
          className=" 2xl:w-[56%] xl:w-[75%] w-full flex items-center justify-center flex-col lg:px-0 px-[5%]"
          data-aos="fade-right"
        >
          <h1 className="text-white 2xl:text-[80px] xl:text-[60px] md:text-[56px] md:text-5xl text-3xl  font-semibold">
            Awards and Accreditation
          </h1>
          <p className="2xl:pt-[56px]  xl:pt-7 pt-5 2xl:text-[22px] md:text-base text-sm text-white 2xl:leading-[44px]   md:!leading-8 leading-6 ">
            Celebrating our milestones with industry-leading awards and
            accreditations <br className="md:block  hidden" /> that showcase our
            commitment to quality, innovation, and client satisfaction.
          </p>
          <button
            className="bg-primary text-center text-white xl:mt-14 md:mt-10 mt-5    md:w-[40%] w-[60%] py-3 capitalize 2xl:py-4  rounded-[30px] hover:bg-white hover:text-black xl:text-lg text-sm "
            onClick={() => navigateTo("/loginform")}
          >
            get started
          </button>
        </div>
      </section>
      <section className="px-[5%] 2xl:py-[200px] lg:py-16 md:py-10 py-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 2xl:gap-14 md:gap-7 gap-4 bg-center bg-contain bg-no-repeat bg-[url('../src/assets/imgs/bglines.png')]">
        {partnersData.map((partner, index) => (
          <div
            key={index}
            className="counter 2xl:p-8 xl:p-5 p-3 rounded-lg bg-[#F4F4F4]"
          >
            <img
              src={partner.image}
              alt={partner.title}
              className="2xl:h-[365px] xl:h-72 md:h-60 h-[365px] object-fill w-full rounded-lg cursor-pointer"
              onClick={() => handleImageClick(partner.image)}
            />
            <p className="pt-2 text-heading 2xl:text-2xl xl:text-xl text-lg font-medium">
              {partner.title}
            </p>
          </div>
        ))}

        {/* Modal for full-size image */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Full-size view"
                className="max-h-[90vh] max-w-[90vw] rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold bg-primary p-3 rounded-lg"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="px-[5%]">
        <div className="text-center flex justify-center items-center  flex-col">
          <h1 className="text-heading  2xl:text-[60px] xl:text-[40px] lg:text-[26px] md:text-3xl text-2xl 2xl:!leading-[112px] xl:!leading-[50px] md:!leading-[44px] !leading-8 ">
            Our Service Toolkit
          </h1>
          <p className="2xl:pt-[56px] md:w-[80%] w-full xl:pt-8 md:pt-5 pt-3 2xl:text-lg md:text-base text-sm text-text_color 2xl:leading-[44px]   md:!leading-8 leading-6 ">
            Matoto Technologies provides both pro-active and ad-hoc support on
            hardware, software and network infrastructure. Explore the range of
            specialized tools we offer to power your business. From managed
            services to cutting-edge security, cloud infrastructure, and
            seamless build & deploy solutions, we've got you covered.
          </p>
        </div>
        <div className="flex flex-col items-start md:flex-row justify-between xl:px-16 px-5 lg:gap-20 gap-10 lg:pt-20 pt-10">
          <div className="md:sticky md:top-10">
            <img src={awardhero2} alt="" />
          </div>
          <div className="flex justify-between pt-8 xl:pt-0 lg:pt-0">
            <div className="flex items-center flex-col gap-3">
              <img src={kit1} className="" alt="" />
              <img src={kit2} className="" alt="" />
              <img src={kit3} className="" alt="" />
              <img src={kit2} className="" alt="" />
              <img src={kit4} className="" alt="" />
              <img src={kit2} className="" alt="" />
              <img src={kit5} className="" alt="" />
              <img src={kit2} className="" alt="" />
              <img src={kit6} className="" alt="" />
              <img src={kit2} className="" alt="" />
            </div>

            <div className="">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={service.padding} // Apply the specified padding from the service object
                  data-aos-easing="linear"
                  data-aos="fade-left"
                  data-aos-duration="500"
                >
                  <h2 className="xl:text-[26px] lg:text-lg md:text-base text-[13px] font-semibold text-heading">
                    {service.title}
                  </h2>
                  <p className="2xl:text-lg xl:text-base text-xs font-normal text-text_color pt-1 2xl:!leading-10 xl:!leading-8 md:!leading-6 leading-5">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<Trusty_section/>
      <NewsletterSection />
        <ContactUs />
        <Footer />
    </>
  );
}

export default AwardPage;
