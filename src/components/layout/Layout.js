import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../Navbar'
import TopNavbar from '../TopNavbar'
import FrontCarousel from '../FrontCarousel'
import TimeUntil from '../TimeUntil'
import PartnerCarousel from '../PartnerCarousel'
import SupporterCarousel from '../SupporterCarousel'
import Footer from '../Footer'
import ScrollButton from '../ScrollToTop'


import config from "../../../data/SiteConfig";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
    <Navbar />
    <PartnerCarousel />
    <SupporterCarousel />
    
    <div>{children}</div>
    <Footer/>
    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
  </div>
)

export default TemplateWrapper
