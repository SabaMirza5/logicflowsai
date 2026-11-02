import React from "react";
import HeroPropFirst from "../HeroPropFirst";
import cloude2 from "../../assets/imgs/cloude2.jpg";
import NewsletterSection from "../NewsletterSection";

function AiVoice() {
  return (
    <>
      <section className="mb-10">
        <HeroPropFirst
          heading="Transform Customer Experiences with"
          highlightText="AI Voice & Customer Support."
          description="Deliver smarter, faster, and more personalized customer experiences with AI-powered voice agents and intelligent support solutions. From automating customer calls to answering inquiries and providing virtual assistance, our solutions help businesses streamline communication, improve response times, and build stronger customer relationships."
          image={cloude2}
          secondHeading="Redefine Customer Service with"
          secondHighlightText=" Intelligent AI Support"
          secondDescription="Our mission is to help businesses transform customer communication through intelligent voice agents, conversational AI, and automated support solutions. We develop customized systems that understand customer needs, respond naturally to inquiries, automate repetitive tasks, and integrate seamlessly with existing business tools. From AI-powered phone assistants and intelligent chatbots to automated call handling and virtual support, our solutions help businesses deliver consistent and efficient customer experiences. We focus on reducing manual workloads, improving response times, and enabling support teams to concentrate on complex customer needs. By combining advanced AI technologies with flexible automation, we help businesses streamline communication workflows, enhance customer engagement, and improve operational efficiency. Our goal is to make customer support more accessible, responsive, and reliable while providing scalable solutions that adapt to your business needs and support long-term growth."
        />
      </section>
      <NewsletterSection />
    </>
  );
}

export default AiVoice;
