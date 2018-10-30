import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import TopNavbar from './TopNavbar'
import FrontCarousel from './FrontCarousel'
import TimeUntil from './TimeUntil'
import PartnerCarousel from './PartnerCarousel'
import SupporterCarousel from './SupporterCarousel'
import Footer from './Footer'
import TagList from './TagList'
import LogoSection from './LogoSection'
import ExquisiteCorpse from './ExquisiteCorpse'
import ScrollButton from './ScrollToTop'

import config from "../../data/SiteConfig";

const TemplateWrapper = ({ children }) => (
  <div className="containerIndex">
    <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
    <LogoSection className="logoSection" />
    <ExquisiteCorpse className="exquisiteCorpse"/>
    <div className="mainIndexContent">{children}</div>
    <Footer className="footer"/>
    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
  </div>
)

export default TemplateWrapper
