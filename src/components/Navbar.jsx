
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import navlogo from "../assets/imgs/navlogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "FAQs", path: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8 xl:py-7 lg:px-12">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={navlogo}
            alt="LOGIC FLOWS AI"
            className="h-full w-full cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.3,
                }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`relative inline-block text-sm capitalize transition-colors duration-200 hover:text-primary xl:text-base ${
                    isActive ? "text-primary" : "text-heading"
                  }`}
                >
                  {link.name}

                  {/* Active Underline */}
                  <motion.span
                    className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary"
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact-us"
          className="hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:opacity-85 xl:text-base 2xl:py-4 lg:inline-flex"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          className="text-2xl text-primary lg:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-md px-3 py-2.5 text-base transition-colors duration-200 hover:bg-gray-50 hover:text-primary ${
                        isActive
                          ? "font-semibold text-primary"
                          : "text-heading"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Contact Button */}
              <Link
                to="/contact-us"
                onClick={() => setIsOpen(false)}
                className={`mt-2 flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-center text-xs font-semibold uppercase text-white transition-opacity hover:opacity-85 ${
                  location.pathname === "/contact-us"
                    ? "ring-2 ring-primary ring-offset-2"
                    : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
