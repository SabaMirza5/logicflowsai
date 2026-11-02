import React from 'react'
import Hero from '../HomePage/Hero'
import AiSolution from '../HomePage/AiSolution'
import OurClient from '../HomePage/OurClient'
import TransferringBusiness from '../HomePage/TransferringBusiness'
import OurServices from '../HomePage/OurServices'
import MindsBehindLogicFlows from '../HomePage/MindsBehindLogicFlows'
import NewsletterSection from '../NewsletterSection'
import ContactUs from '../ContactUs'

function HomePage() {
  return (
    <div>
      <Hero/>
      <AiSolution/>
      <OurClient/>
      <TransferringBusiness/>
      <OurServices/>
      <MindsBehindLogicFlows/>
      <NewsletterSection/>
      <ContactUs/>
    </div>
  )
}

export default HomePage
