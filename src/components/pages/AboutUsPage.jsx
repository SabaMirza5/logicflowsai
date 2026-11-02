import React from 'react'
import AboutHero from '../AboutPage/AboutHero'
import OurClient from '../HomePage/OurClient'
import CraftingAi from '../AboutPage/CraftingAi'
import UnlockBusiness from '../AboutPage/UnlockBusiness'
import MindsBehindLogicFlows from '../HomePage/MindsBehindLogicFlows'
import NewsletterSection from '../NewsletterSection'
import ContactUs from '../ContactUs'

function AboutUsPage() {
  return (
    <div>
      <AboutHero/>
      <OurClient/>
      <CraftingAi/>
      <UnlockBusiness/>
      <MindsBehindLogicFlows/>
      <NewsletterSection/>
      <ContactUs/>
    </div>
  )
}

export default AboutUsPage
