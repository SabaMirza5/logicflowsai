

import React from 'react';
import Navbar from '../Navbar';
import HeroPropFirst from '../HeroPropFirst';
import ps1 from '../../assets/imgs/ps1.png'
import HeroPropSecond from '../HeroPropSecond';
// import ps2 from '../../assets/imgs/ps2.png';
import ps4 from '../../assets/imgs/ps4.png';
import ps3 from '../../assets/imgs/ps3.png';
import ps5 from '../../assets/imgs/ps5.png'
import ps6 from '../../assets/imgs/ps6.png'
import ps7 from '../../assets/imgs/ps7.jpg';
import NewsletterSection from "../NewsletterSection";
import Trusty_section from "../Trusty_section";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

function ProffecisionalServices() {
    const data = {
        heading: 'Tailored Professional Solution', // Added heading here
        image1:ps3,
        options: [
          { title: 'IT Strategy', id: 1 },
          { title: 'IT Resourcing – Contract & Permanent', id: 2 },
          { title: 'Strategic Project Management', id: 3 },
          { title: 'IT GRC', id: 4 },
        ],
        content: {
          'IT Strategy': {
            heading: 'IT Strategy Offers:',
            details: [
              'Outlines steps for effective implementation.',
              'Define precise tech goals that drive your organizational growth and success.',
              'Create a dynamic plan to transform tech strategies into tangible results.',
              'Develops an overall IT strategy that aligns with your organization objectives and business goals.',
              'Concentrates on selecting and utilizing the right technologies to meet your IT and business needs.',
              'Considers the role of personnel who manage technology, ensuring they are aligned with the strategy.',
            ],
            image: ps4,
          },
          'IT Resourcing – Contract & Permanent': {
            heading: 'IT Resourcing – Contract & Permanent Benefits:',
            details: [
                'Access to a wide network of IT professionals for contract and permanent placements.',
                'Tailored recruitment strategies to meet specific organizational needs.',
                'Expertise in various IT domains including software development, cybersecurity, and data science.',
                'Ongoing support and consultation throughout the recruitment process.',
                'Assistance with onboarding and talent retention strategies.',
            ],
            image: ps5,
          },
          'Strategic Project Management': {
      heading: 'Strategic Project Management Offers:',
      details: [
        'Expert project management to ensure successful project delivery.',
        'Alignment of project objectives with business goals.',
        'Risk management and mitigation strategies.',
        'Effective communication and stakeholder engagement.',
        'Performance tracking and reporting for ongoing improvement.',
      ],
      image: ps6,// Add relevant image
    },
    'IT GRC': {
      heading: 'IT GRC Offers',
      details: [
        'Frameworks to ensure IT aligns with business goals.',
        'Risk assessment and management strategies.',
        'Compliance with regulatory requirements and standards.',
        'Policy development and implementation for governance.',
        'Continuous monitoring and reporting on GRC effectiveness.',
      ],
      image: ps7,// Add relevant image
    },

          
          
        },
      };
  return (
    <>
    <Navbar/>
    <HeroPropFirst
      heading="Expert IT Solutions, Crafted for Your Success"
      highlightText="Professional Services"
      description=" Unlock the full potential of your business with our comprehensive professional services. From IT strategy development to project management and implementation, we provide customized solutions to meet your unique needs, ensuring seamless integration, optimized performance, and sustainable growth."
      image={ps1}
      secondHeading="Empowering with Next-Level "
      secondHighlightText="IT Services "
      secondDescription="Our team specializes in crafting innovative, customized IT strategies and solutions that are meticulously designed to address the specific needs of your business. By integrating cutting-edge technology and best practices, we drive operational efficiency, enhance productivity, and foster sustainable growth."
    />
       <HeroPropSecond data={data} />
       <Trusty_section  />
       <NewsletterSection />
        <ContactUs />
        <Footer />
    </>
  )
}

export default ProffecisionalServices
