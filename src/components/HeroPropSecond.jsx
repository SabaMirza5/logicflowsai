
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import star2 from '../assets/imgs/star2.png';
import star3 from '../assets/imgs/star3.png';

function HeroPropSecond({ data }) {
  const [activeSection, setActiveSection] = useState(data.options[0].title); // Set the first option as the default active section
  const dataRowRef = useRef(null);

  const handleOptionClick = (section) => {
    setActiveSection(section);
    dataRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return (
    <section className="px-[5%]">
      <div className="flex justify-between lg:gap-32 md:gap-12 gap-6 md:flex-row flex-col items-center bg-center bg-contain bg-no-repeat bg-none md:bg-[url('../src/assets/imgs/bglines.png')]">
        <div className="md:w-[40%] w-full flex items-center justify-center">
          <img src={data.image1} alt="Cloud Icon" />
        </div>
        <div className="md:w-[60%] w-full">
          <h1 className="lg:text-[40px] md:text-2xl text-xl lg:leading-[50px] text-heading font-normal md:text-start text-center">
            {data.heading} {/* Render the heading from props */}
          </h1>
          <div className="2xl:space-y-10 xl:space-y-5 space-y-2 lg:pt-12 pt-6">
            {data.options.map((item) => (
              <div
                key={item.title}
                onClick={() => handleOptionClick(item.title)}
                className={`flex items-center justify-between border-b pb-2 border-text_color group cursor-pointer ${
                  activeSection === item.title ? 'text-primary' : ''
                }`}
              >
                <p className={`flex items-center gap-1 2xl:text-4xl lg:text-xl md:text-base text-sm text-heading font-normal ${
                  activeSection === item.title ? 'text-primary' : ''
                }`}>
                  <img
                    src={activeSection === item.title ? star2 : star3}
                    alt=""
                    className="inline"
                  />
                  {item.title}
                </p>
                <IoIosArrowRoundForward
                  className={`text-5xl ${
                    activeSection === item.title ? 'text-primary' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Datarow Section */}
      <div
        ref={dataRowRef} // Attach ref to the datarow div
        className="flex justify-center items-center 2xl:pt-[170px] md:pt-[70px] pt-11 gap-14 lg:flex-row flex-col bg-center bg-contain bg-no-repeat bg-none md:bg-[url('../src/assets/imgs/bglines.png')] datarow"
      >
        <div className="lg:w-1/2 w-full">
          <h1 className="2xl:text-[50px] xl:text-4xl 2xl:!leading-[67px] xl:!leading-[50px] md:text-3xl text-2xl text-primary font-normal ml-3">
            {data.content[activeSection].heading}
          </h1>
          <ul className="list-disc text-text_color font-normal 2xl:text-2xl lg:text-base text-sm md:space-y-4 space-y-3 list-outside ml-8 pt-7">
            {data.content[activeSection].details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 w-full rounded-[30px] ">
          <img src={data.content[activeSection].image} alt=""  className='rounded-[30px] object-contain h-full w-full  '/>
        </div>
      </div>
    </section>
  );
}

export default HeroPropSecond;
