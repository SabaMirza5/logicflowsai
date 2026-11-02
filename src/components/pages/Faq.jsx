"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does LogicFlowsAI provide?",
    answer:
      "LogicFlowsAI provides AI agent development, AI voice and customer support, AI knowledge bases, AI SaaS development, business workflow automation, and API and software integrations.",
  },
  {
    question: "How can AI help my business?",
    answer:
      "AI can automate repetitive tasks, improve customer support, simplify information management, connect business applications, and help your team work more efficiently.",
  },
  {
    question: "Can you develop custom AI solutions?",
    answer:
      "Yes! We develop customized AI solutions based on your business goals, including intelligent AI agents, chatbots, voice assistants, automated workflows, and AI-powered applications.",
  },
  {
    question: "How long does an AI project take?",
    answer:
      "Project timelines depend on the complexity, required features, integrations, and overall scope. We assess your requirements to establish a suitable development timeline.",
  },
  {
    question: "How can I get started with LogicFlowsAI?",
    answer:
      "Getting started is easy. Contact our team with your business requirements, and we will help you explore suitable AI solutions and determine the next steps for your project.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative flex h-64 items-center justify-center bg-[url('../src/assets/imgs/faqbg.png')] bg-cover bg-center bg-no-repeat md:h-96">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Heading */}
        <h2 className="relative z-10 text-center text-3xl font-bold text-white montserrat md:text-4xl lg:text-5xl">
          FAQs
        </h2>
      </div>

      <section className="w-full px-[5%] py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Heading Animation */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-primary">
              FAQs
            </p>

            <h1 className="text-heading text-3xl font-semibold md:text-5xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text_color md:text-base">
              Find answers to common questions about our AI solutions,
              development services, and business automation.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-primary/50 bg-primary/5"
                      : "border-gray-200 hover:border-primary/40"
                  }`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -3 }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                  >
                    <span className="text-base font-medium text-heading md:text-lg">
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                    >
                      {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                    </motion.span>
                  </button>

                  {/* Answer Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-7 text-text_color md:px-6 md:pb-6 md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
