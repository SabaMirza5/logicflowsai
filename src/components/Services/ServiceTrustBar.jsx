
import { motion } from "framer-motion";
import {
  FaCheck,
  FaClock,
  FaFlask,
  FaLink,
  FaProjectDiagram,
  FaPlug,
  FaRobot,
  FaUserFriends,
} from "react-icons/fa";
import {
  SiAnthropic,
  SiGmail,
  SiGooglegemini,
  SiGooglesheets,
  SiHubspot,
  SiMeta,
  SiSalesforce,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";

const integrationIcons = {
  n8n: { Icon: FaProjectDiagram, color: "text-[#ea4b71]" },
  OpenAI: { Icon: FaRobot, color: "text-[#10a37f]" },
  Claude: { Icon: SiAnthropic, color: "text-[#d97757]" },
  Gemini: { Icon: SiGooglegemini, color: "text-[#4285f4]" },
  WhatsApp: { Icon: SiWhatsapp, color: "text-[#25d366]" },
  HubSpot: { Icon: SiHubspot, color: "text-[#ff7a59]" },
  Salesforce: { Icon: SiSalesforce, color: "text-[#00a1e0]" },
  Meta: { Icon: SiMeta, color: "text-[#0866ff]" },
  "Google Sheets": { Icon: SiGooglesheets, color: "text-[#34a853]" },
  Gmail: { Icon: SiGmail, color: "text-[#ea4335]" },
  Telegram: { Icon: SiTelegram, color: "text-[#26a5e4]" },
};

const trustPointIcons = [
  FaClock,
  FaLink,
  FaUserFriends,
  FaFlask,
];

function ServiceTrustBar({ data }) {
  return (
    <section className="relative overflow-hidden border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-orange-50 px-[5%] py-14 md:py-20">
      <div className="pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {data.points?.map((point, index) => {
            const Icon = trustPointIcons[index] || FaCheck;

            return (
              <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -6 }}
              className="group relative flex min-h-28 items-center gap-4 overflow-hidden rounded-2xl border border-violet-100 bg-white/90 p-5 shadow-[0_8px_30px_rgba(87,6,197,0.06)] transition-shadow duration-300 hover:border-primary/30 hover:shadow-[0_16px_40px_rgba(87,6,197,0.14)]"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon aria-hidden="true" className="text-lg" />
              </span>
              <p className="text-left text-sm font-semibold leading-6 text-heading md:text-base">
                {point}
              </p>
              </motion.div>
            );
          })}
        </motion.div>

        {data.logos?.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 border-t border-violet-100 pt-8 md:mt-14"
          >
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Connects with the tools you already use
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {data.logos.map((logo, index) => {
                const { Icon, color } = integrationIcons[logo] || {
                  Icon: FaPlug,
                  color: "text-primary",
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm transition-colors hover:border-primary/30 hover:text-primary sm:text-sm"
                  >
                    <Icon aria-hidden="true" className={`text-base ${color}`} />
                    <span>{logo}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ServiceTrustBar;
