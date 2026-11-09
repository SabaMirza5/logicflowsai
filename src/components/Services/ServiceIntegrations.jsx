
import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaGoogle,
  FaWhatsapp,
  FaTelegram,
  FaSlack,
  FaDiscord,
  FaMicrosoft,
  FaHubspot,
  FaSalesforce,
  FaEnvelope,
  FaDatabase,
  FaPlug,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiOpenai,
  SiGooglesheets,
  SiGmail,
  SiZapier,
  SiNotion,
  SiAnthropic,
  SiGooglegemini,
  SiAirtable,
  SiGooglecalendar,
  SiMeta,
} from "react-icons/si";

const integrationIcons = {
  n8n: { Icon: FaProjectDiagram, color: "text-[#ea4b71]" },
  OpenAI: { Icon: SiOpenai, color: "text-[#10a37f]" },
  ChatGPT: { Icon: SiOpenai, color: "text-[#10a37f]" },
  Claude: { Icon: SiAnthropic, color: "text-[#d97757]" },
  Gemini: { Icon: SiGooglegemini, color: "text-[#4285f4]" },
  Google: { Icon: FaGoogle, color: "text-[#4285f4]" },
  WhatsApp: { Icon: FaWhatsapp, color: "text-[#25d366]" },
  HubSpot: { Icon: FaHubspot, color: "text-[#ff7a59]" },
  Salesforce: { Icon: FaSalesforce, color: "text-[#00a1e0]" },
  Meta: { Icon: SiMeta, color: "text-[#0866ff]" },
  "Google Sheets": { Icon: SiGooglesheets, color: "text-[#34a853]" },
  Gmail: { Icon: SiGmail, color: "text-[#ea4335]" },
  Telegram: { Icon: FaTelegram, color: "text-[#26a5e4]" },
  Slack: { Icon: FaSlack, color: "text-[#611f69]" },
  Discord: { Icon: FaDiscord, color: "text-[#5865f2]" },
  Microsoft: { Icon: FaMicrosoft, color: "text-[#00a4ef]" },
  Zapier: { Icon: SiZapier, color: "text-[#ff4a00]" },
  Notion: { Icon: SiNotion, color: "text-[#000000]" },
  Airtable: { Icon: SiAirtable, color: "text-[#18bfff]" },
  "Google Calendar": {
    Icon: SiGooglecalendar,
    color: "text-[#4285f4]",
  },
  Email: { Icon: FaEnvelope, color: "text-[#ea4335]" },
  Database: { Icon: FaDatabase, color: "text-[#4285f4]" },
  API: { Icon: FaPlug, color: "text-primary" },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function ServiceIntegrations({ data }) {
  return (
    <section className="relative overflow-hidden border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-orange-50 px-[5%] py-16 md:py-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <span className="text-secondary text-sm font-semibold tracking-wider">
            {data.tag || "INTEGRATIONS"}
          </span>

          <h2 className="mt-2 text-2xl font-bold text-heading md:text-4xl">
            {data.heading}
          </h2>

          <p className="mx-auto md:mt-5 mt-2 md:text-base text-sm text-center  max-w-3xl leading-7 text-gray-600">
            {data.description}
          </p>
        </motion.div>

        {/* Integration Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {data.items?.map((item, index) => {
            const name = typeof item === "string" ? item : item.name;

            const integration = integrationIcons[name] || {
              Icon: FaRobot,
              color: "text-primary",
            };

            const Icon = integration.Icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                whileHover={{ y: -3, scale: 1.04 }}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm transition-colors hover:border-primary/30 hover:text-primary sm:text-sm"
              >
                <Icon
                  aria-hidden="true"
                  className={`text-base ${integration.color}`}
                />

                <span>{name}</span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default ServiceIntegrations;
