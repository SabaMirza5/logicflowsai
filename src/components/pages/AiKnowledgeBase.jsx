import React from "react";
import HeroPropFirst from "../HeroPropFirst";
import cloude3 from "../../assets/imgs/cloude3.jpg";
import NewsletterSection from "../NewsletterSection";

function AiKnowledgeBase() {
  return (
    <>
      <section className="mb-10">
        <HeroPropFirst
          heading="Unlock Business Insights with"
          highlightText="AI Knowledge Base Solutions."
          description="Organize your business information and make it easier to access with intelligent AI-powered knowledge bases. From searching documents and retrieving relevant information to answering questions and assisting employees, our solutions help businesses turn scattered data into valuable knowledge, improve productivity, and make informed decisions faster."
          image={cloude3}
          secondHeading="Make Information Smarter with"
          secondHighlightText=" Intelligent Knowledge Bases"
          secondDescription="Our mission is to help businesses unlock the full potential of their information through intelligent AI knowledge base solutions. We develop customized systems that organize business documents, centralize essential information, and make knowledge accessible through natural language search and conversational AI. From internal company resources and technical documentation to FAQs, training materials, and customer support content, our solutions help teams find accurate and relevant information without wasting time searching through multiple sources. By combining advanced AI technologies with intelligent information retrieval, we help businesses simplify knowledge management, improve collaboration, and reduce repetitive inquiries. Our solutions can support employees in accessing company knowledge, assist customers with relevant answers, and help teams make better use of their existing data. We focus on building secure, scalable, and user-friendly knowledge systems that adapt to your business requirements and integrate with existing workflows. Our goal is to transform the way businesses store, access, and use information, creating a smarter working environment that improves efficiency, supports better decision-making, and drives long-term growth."
        />
      </section>
      <NewsletterSection />
    </>
  );
}

export default AiKnowledgeBase;
