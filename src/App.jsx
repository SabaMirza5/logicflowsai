import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurServicesPage from "./components/pages/OurServicesPage";
import AiAgentDev from "./components/pages/AiAgentDev";
import AiVoice from "./components/pages/AiVoice";
import AiKnowledgeBase from "./components/pages/AiKnowledgeBase";
import AiSaasDevelopment from "./components/pages/AiSaasDevelopment";
import BusinessWorkflowAutomation from "./components/pages/BusinessWorkflowAutomation";
import ApiIntegration from "./components/pages/ApiIntegration";
import Faq from "./components/pages/Faq";
import CaseStudyPage from "./components/pages/CaseStudyPage";
import ContactUsPage from "./components/pages/ContactUsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="faq" element={<Faq />} />
        <Route exact path="about-us" element={<AboutUsPage />} />
        <Route exact path="services" element={<OurServicesPage />} />
        <Route exact path="ai-agent-development" element={<AiAgentDev />} />
        <Route exact path="ai-voice" element={<AiVoice />} />
        <Route exact path="api-integration" element={<ApiIntegration />} />
        <Route exact path="ai-knowledge-base" element={<AiKnowledgeBase />} />
        <Route
          exact
          path="ai-saas-development"
          element={<AiSaasDevelopment />}
        />
        <Route
          exact
          path="business-workflow-automation"
          element={<BusinessWorkflowAutomation />}
        />
        <Route exact path="case-studies" element={<CaseStudyPage />} />
        <Route exact path="contact-us" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
// Custom button function
export const useNavigateButton = () => {
  const navigate = useNavigate();

  // The function to call for navigation
  const navigateTo = (path) => {
    navigate(path); // Navigate to the given path
  };

  return { navigateTo };
};
