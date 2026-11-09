
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdArrowDropDown, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";

function ContactUs() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    number: "",
    users: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const dropdownRef = useRef(null);

  const services = [
    "AI Agent Development",
    "AI Voice & Customer Support",
    "AI Knowledge Base & RAG",
    "AI SaaS Development",
    "Business Workflow Automation",
    "API & Software Integrations",
  ];

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.companyName ||
      !formData.number ||
      !selectedServices.length ||
      !formData.users ||
      !formData.email ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    setError("");

    const templateParams = {
      from_name: formData.firstName,
      companyName: formData.companyName,
      users: formData.users,
      from_email: formData.email,
      message: formData.message,
      number: formData.number,
      services: selectedServices.join(", "),
      to_email: "info@matoto.co.za",
    };

    emailjs
      .send(
        "service_vfvryzu",
        "template_nxbjp9u",
        templateParams,
        "7lg0ZdLWCAJmi1-O2"
      )
      .then(() => {
        alert("Your message has been sent successfully!");
        window.location.reload();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section
      id="contactus"
      className=" bg-center bg-contain  bg-none md:bg-[url('../src/assets/imgs/lines.png')] overflow-x-hidden px-[5%] 2xl:py-[200px] xl:py-[100px] lg:py-[60px] md:py-20 py-10 flex justify-center 2xl:gap-44 xl:gap-24 md:gap-10 gap-5 md:flex-row flex-col items-center bg-no-repeat "
    >
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="md:w-1/2 w-full "
      >
        <h1 className="text-primary md:text-start text-center xl:leading-[60px] md:leading-10 leading-8 2xl:text-[66px] xl:text-[50px] lg:text-[30px] text-xl capitalize font-bold">
          Connect<span className="text-heading"> with Us Today.</span>
        </h1>

        <p className="2xl:text-xl md:text-base text-sm lg:pt-5 2xl:pt-7 pt-3 text-heading 2xl:leading-[50px] lg:leading-7 leading-6 md:text-start text-justify">
          Ready to elevate your experience? Reach out to us today and discover
          how our expertise can propel your success to new heights.
        </p>

        {/* Contact Information */}
       
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="md:w-1/2 w-full"
      >
        <form
          className="2xl:space-y-6 md:space-y-4 space-y-2"
          onSubmit={handleSubmit}
        >
          <div className="flex md:gap-5 gap-2 items-center md:flex-row flex-col">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />
          </div>

          <div className="flex md:gap-5 gap-2 items-center relative md:flex-row flex-col">
            <input
              type="number"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleInputChange}
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />

            <div className="relative w-full" ref={dropdownRef}>
              <input
                type="text"
                placeholder="What Service Do You Require?"
                value={selectedServices.join(", ")}
                onClick={() => setShowDropdown((prev) => !prev)}
                readOnly
                className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium pr-10"
              />

              <MdArrowDropDown
                className={`absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />

              {showDropdown && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-[15px] shadow-lg z-10">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="md:px-4 px-2 py-2 flex items-center hover:rounded-[15px] hover:bg-gray-100 cursor-pointer md:text-sm text-xs text-[#666666] font-medium poppins"
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="mr-2 accent-primary"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex md:gap-5 gap-2 items-center md:flex-row flex-col">
            <input
              type="number"
              name="users"
              placeholder="How Many Users?"
              value={formData.users}
              onChange={handleInputChange}
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full lg:py-4 py-3 ps-5 lg:text-base text-xs bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none font-medium"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full pt-4 ps-5 bg-[#EBEBEB] poppins text-[#666666] rounded-[30px] placeholder:text-[#666666] focus:outline-none resize-none font-medium lg:text-base text-xs"
            rows="4"
          />

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <div className="lg:!mt-8 md:!mt-6 !mt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-primary text-white lg:py-4 py-3 rounded-[30px] font-medium hover:bg-secondary transition duration-300 lg:text-base text-xs"
            >
              SUBMIT
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactUs;
