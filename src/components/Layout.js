import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import TopNavbar from '../components/TopNavbar'
import FrontCarousel from './FrontCarousel'
import PartnerCarousel from './PartnerCarousel'
import SupporterCarousel from './SupporterCarousel'
import Footer from '../components/Footer'
import './all.sass'

import config from "../../data/SiteConfig";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
    <TopNavbar />
    <Navbar />
    <FrontCarousel/>
    <div>{children}</div>
    <PartnerCarousel/>
    <SupporterCarousel/>
    <Footer />
  </div>
)

export default TemplateWrapper
