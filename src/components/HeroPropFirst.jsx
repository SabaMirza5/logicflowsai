
import React from 'react';

function HeroPropFirst({ heading, highlightText, description, image, secondHeading, secondHighlightText, secondDescription }) {
  return (
    <section className="xl:py-2 lg:py-[10px] md:py-10 py-5 px-[5%] flex items-center text-center justify-center flex-col">
      <div className="md:w-[85%] w-full">
        <h1 className="text-heading text-center 2xl:text-[60px] xl:text-[40px] lg:text-4xl md:text-3xl text-[22px] 2xl:!leading-[112px] xl:!leading-[70px] md:!leading-[44px] !leading-8">
          {heading}<br className="lg:block hidden" /><span className="text-primary">&nbsp;{highlightText}</span>
    
        </h1>
        <p className="2xl:text-lg md:text-base text-sm lg:pt-5 pt-3 text-text_color 2xl:leading-[44px] lg:leading-7 leading-6 text-center">
          {description}
        </p>
      </div>
      <img src={image} alt="" className="md:pt-12 pt-6 " />

      <div className="lg:pt-[100px] pt-14 flex items-start lg:gap-7 gap-3 lg:text-start text-center lg:flex-row flex-col">
        <h1 className="text-heading 2xl:text-[60px] xl:text-[40px] lg:text-4xl md:text-3xl text-[22px] 2xl:!leading-[90px] xl:!leading-[60px] md:!leading-[44px] !leading-8 lg:w-[40%] w-full">
          {secondHeading} 
          <span className="text-primary">{secondHighlightText}</span>
        </h1>
        <p className="2xl:text-xl md:text-base text-sm text-text_color 2xl:leading-[44px] lg:leading-7 leading-6 lg:w-[60%] w-full">
          {secondDescription}
        </p>
      </div>
    </section>
  );
}

export default HeroPropFirst;
