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
      {/* FAQ Hero */}
      <div className="relative flex h-64 items-center justify-center bg-[url('../src/assets/imgs/faqbg.png')] bg-cover bg-center bg-no-repeat md:h-96">
        <div className="absolute inset-0 bg-black/80"></div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 text-center text-3xl font-bold text-white montserrat md:text-4xl lg:text-5xl"
        >
          FAQs
        </motion.h2>
      </div>

      {/* FAQ Section */}
      <section className="relative w-full overflow-hidden px-[5%] py-16 md:py-24">
        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Heading */}
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
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -3,
                    transition: { duration: 0.25 },
                  }}
                  className={`group relative overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/5"
                      : "border-gray-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                  }`}
                >
                  {/* Animated Top Border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: isOpen ? 1 : 0,
                    }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-primary via-orange-400 to-primary"
                  />

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                  >
                    <span
                      className={`text-base font-medium transition-colors duration-300 md:text-lg ${
                        isOpen
                          ? "text-primary"
                          : "text-heading group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                        scale: isOpen ? 1.08 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                          <motion.span
                            key="minus"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaMinus size={12} />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="plus"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FaPlus size={12} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.span>
                  </button>

                  {/* Answer */}
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
                        <motion.p
                          initial={{ y: -8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.08 }}
                          className="px-5 pb-5 text-sm leading-7 text-text_color md:px-6 md:pb-6 md:text-base"
                        >
                          {faq.answer}
                        </motion.p>
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
