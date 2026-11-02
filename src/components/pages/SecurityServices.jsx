
import React from 'react';
import Navbar from '../Navbar';
import HeroPropFirst from '../HeroPropFirst';
import security1 from '../../assets/imgs/security1.png'
import HeroPropSecond from '../HeroPropSecond';
import security3 from '../../assets/imgs/security3.png';
import security2 from '../../assets/imgs/security2.png';
import security4 from '../../assets/imgs/security4.png';
import security6 from '../../assets/imgs/security6.png'
import security5 from '../../assets/imgs/security5.png'
import cloudmigration from '../../assets/imgs/cloudmigration.png';
import NewsletterSection from "../NewsletterSection";
import Trusty_section from "../Trusty_section";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

function SecurityServices() {
    const data = {
        heading: 'Tailored Security Solutions', // Added heading here
        image1:security2,
        options: [
          { title: 'Managed Firewall', id: 1 },
          { title: 'Security Vulnerability Assessment', id: 2 },
          { title: 'Virus and Malware Protection', id: 3 },
          { title: 'Mail Filtering Management', id: 4 },
        ],
        content: {
          'Managed Firewall': {
            heading: 'Managed Firewall Offers:',
            details: [
              'We handle all firewall configurations and policy management.',
              'Continuous monitoring ensures real-time threat detection.',
              'We manage firewall rules and compliance, freeing you from the burden.',
              '1 TB of OneDrive for Business cloud storage per user for secure file storage and sharing.',
              'Seamless collaboration with real-time editing and sharing across devices.',
              'Ideal for businesses looking to enhance productivity and streamline workflows.',
            ],
            image: security3,
          },
          'Security Vulnerability Assessment': {
            heading: 'Security Vulnerability Assessment Benefits:',
            details: [
              'Regular scans to identify vulnerabilities in systems and networks.',
              'Detailed reports on security posture and risk levels.',
              'Actionable recommendations for mitigating risks.',
              'Testing of security controls and policies.',
              'Improved disaster recovery capabilities.',
              'Support in compliance with industry regulations.',
            ],
            image: security4,
          },
          'Virus and Malware Protection': {
      heading: 'Virus and Malware Protection:',
      details: [
        'Advanced threat detection and prevention mechanisms.',
        'Regular updates to virus definitions and malware signatures.',
        'Real-time scanning of files and email attachments.',
        'User education on best security practices.',
        'Incident response planning and support.',
      ],
      image: security6,// Add relevant image
    },
    'Mail Filtering Management': {
      heading: 'Mail Filtering Management:',
      details: [
        'Spam detection and filtering to protect inboxes.',
        'Advanced threat protection against phishing attacks.',
        'Email archiving and compliance solutions.',
        'Customized email filtering rules based on business needs.',
        'Regular reporting on mail filtering effectiveness.',
      ],
      image: security5,// Add relevant image
    },

          
          
        },
      };
  return (
    <>
    <Navbar/>
    <HeroPropFirst
      heading="Fortify Your Digital World with Premier
"
      highlightText="Security Services"
      description=" Our advanced security services offer robust protection against a wide range of cyber threats, including data breaches and system vulnerabilities. We provide tailored solutions that include threat detection, risk management, and compliance support to ensure your organization's data integrity and operational continuity."
      image={security1}
      secondHeading="Fortress Your Digital Space with "
      secondHighlightText="Security"
      secondDescription="Our comprehensive security services deliver cutting-edge protection against cyber threats, ensuring your data, systems, and operations remain secure. From proactive threat detection to rapid response and risk management, we provide tailored solutions that keep you ahead of evolving security challenges and maintain your operational integrity."
    />
       <HeroPropSecond data={data} />
       <Trusty_section  />
       <NewsletterSection />
        <ContactUs />
        <Footer />
    </>
  )
}

export default SecurityServices
