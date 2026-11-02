
import React from 'react';
import Navbar from '../Navbar';
import HeroPropFirst from '../HeroPropFirst';
import connactivity1 from '../../assets/imgs/connactivity1.png'
import HeroPropSecond from '../HeroPropSecond';
import connactivity4 from '../../assets/imgs/connactivity4.png';
import connacitivty2 from '../../assets/imgs/connacitivty2.png';
import connactivity3 from '../../assets/imgs/connactivity3.png'
import connactivity5 from '../../assets/imgs/connactivity5.png'
import connactivity6 from '../../assets/imgs/connactivity6.png'
import connactivity7 from '../../assets/imgs/connactivity7.png'

import NewsletterSection from "../NewsletterSection";
import Trusty_section from "../Trusty_section";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

function ConnectivityPage() {
    const data = {
        heading: 'Tailored Connectivity & VoIP Solution', // Added heading here
        image1:connacitivty2,
        options: [
          { title: 'Hosted Voice Solution', id: 1 },
          { title: 'Fibre & LTE Connectivity', id: 2 },
          { title: 'Web Hosting & Domain Management', id: 3 },
          { title: 'Software-Defined Networking', id: 4 },
          { title: 'UCAAS', id: 5 },
        ],
        content: {
          'Hosted Voice Solution': {
            heading: 'Hosted Voice Solution Offers:',
            details: [
              'Outlines steps for effective implementation.',
              'Define precise tech goals that drive your organizational growth and success.',
              'Create a dynamic plan to transform tech strategies into tangible results.',
              'Develops an overall IT strategy that aligns with your organization objectives and business goals.',
              'Concentrates on selecting and utilizing the right technologies to meet your IT and business needs.',
              'Considers the role of personnel who manage technology, ensuring they are aligned with the strategy.',
            ],
            image: connactivity3,
          },
          'Fibre & LTE Connectivity': {
            heading: 'Fibre & LTE Connectivity Offers:',
            details: [
          'High-speed internet connectivity solutions using fiber optics and LTE.',
        'Flexible plans tailored for businesses of all sizes.',
        'Redundant connections to ensure uninterrupted service.',
        'Support for VoIP and video conferencing applications.',
        'Consultation on network design and implementation.',
            ],
            image: connactivity4,
          },


          'Web Hosting & Domain Management': {
            heading: 'Web Hosting & Domain Management Offers:',
            details: [
                'Reliable and secure web hosting solutions for businesses.',
                'Domain registration and management services.',
                '24/7 technical support and maintenance.',
                'Scalability options to grow with your business.',
                'Integrated email hosting solutions.',
            ],
            image: connactivity5,
          },

          'Software-Defined Networking': {
            heading: 'Software-Defined Networking Offers:',
            details: [
                'Flexible and programmable networking solutions.',
                'Improved network management and automation capabilities.',
                'Seamless integration with cloud services and applications.',
                'Enhanced security through centralized policy management.',
                'Support for dynamic network configurations and performance optimization.',
            ],
            image: connactivity6,
          },
         
          'UCAAS': {
            heading: 'UCAAS Offers:',
            details: [
              'Comprehensive communication solutions including voice, video, and messaging.',
        'Integration with existing business applications and workflows.',
        'Scalable plans to accommodate changing business needs.',
        'High availability and disaster recovery features.',
        '24/7 support and service management.',
            ],
            image: connactivity7,
          },
   

          
          
        },
      };
  return (
    <>
    <Navbar/>
    <HeroPropFirst
      heading="Next-Generation Connectivity for a"
      highlightText="Connected World"
      description=" Our cutting-edge VoIP solutions enable your organization to communicate effortlessly across multiple platforms, while our robust connectivity services ensure fast and secure data transfer. From remote teams to large enterprises, we deliver customizable solutions that drive productivity and support your business's growth with reliable and flexible communication tools."
      image={connactivity1}
      secondHeading="Seamless Connectivity &  "
      secondHighlightText="VoIP Solutions"
      secondDescription="Empowering your business with seamless and reliable VoIP and connectivity solutions, ensuring uninterrupted communication and collaboration across all your teams, no matter where they are or what time it is."
    />
       <HeroPropSecond data={data} />
       <Trusty_section  />
       <NewsletterSection />
        <ContactUs />
        <Footer />
    </>
  )
}

export default ConnectivityPage
