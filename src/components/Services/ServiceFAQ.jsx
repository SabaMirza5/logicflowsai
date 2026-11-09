
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

function ServiceFAQ({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-orange-50 px-[5%] py-16 md:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold tracking-wider text-secondary">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className=" text-3xl font-bold text-heading md:text-4xl">
            {data.heading || "Frequently Asked Questions"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Find answers to common questions about our services and solutions.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="space-y-4"
        >
          {data.items?.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className={`group relative overflow-hidden rounded-2xl border bg-white/90 transition-all duration-300 ${
                  isOpen
                    ? "border-primary/30 shadow-[0_12px_35px_rgba(87,6,197,0.09)]"
                    : "border-violet-100 shadow-[0_8px_25px_rgba(87,6,197,0.04)] hover:border-primary/30 hover:shadow-[0_12px_30px_rgba(87,6,197,0.08)]"
                }`}
              >
                {/* Top Animated Border */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-primary to-secondary transition-transform duration-300 ${
                    isOpen
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />

                {/* Question */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 p-5 text-left md:p-6"
                >
                  <span
                    className={`text-sm font-semibold leading-6 transition-colors duration-300 md:text-base ${
                      isOpen ? "text-primary" : "text-heading"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Animated Icon */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      backgroundColor: isOpen
                        ? "var(--color-primary, #5706c5)"
                        : "rgba(87, 6, 197, 0.08)",
                      color: isOpen ? "#ffffff" : "var(--color-primary, #5706c5)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.span
                          key="minus"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaMinus className="text-xs" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="plus"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <FaPlus className="text-xs" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.span>
                </button>

                {/* Animated Answer */}
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
                          ease: "easeInOut",
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-6">
                        <div className="mb-4 h-px bg-gradient-to-r from-primary/20 via-gray-200 to-transparent" />

                        <p className="text-sm leading-7 text-gray-600 md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default ServiceFAQ;
