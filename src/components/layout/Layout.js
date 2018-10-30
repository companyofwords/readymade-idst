import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../Top/Navbar'
import TopNavbar from '../Top/TopNavbar'
import FrontCarousel from '../carousels/FrontCarousel'
import TimeUntil from '../TimeUntil'
import PartnerCarousel from '../carousels/PartnerCarousel'
import SupporterCarousel from '../carousels/SupporterCarousel'
import Footer from '../Footer/Footer'
import ScrollButton from '../utilities/ScrollToTop'


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
