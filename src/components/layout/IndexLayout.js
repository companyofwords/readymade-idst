import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../Top/Navbar'
import TopNavbar from '../Top/TopNavbar'
import FrontCarousel from '../Carousels/FrontCarousel'
import TimeUntil from '../Top/TimeUntil'
import PartnerCarousel from '../Carousels/PartnerCarousel'
import SupporterCarousel from '../Carousels/SupporterCarousel'
import Footer from '../Footer/Footer'
import TagList from '../Index/TagList'
import LogoSection from '../Top/LogoSection'
import ExquisiteCorpse from '../Carousels/ExquisiteCorpse'
import ScrollButton from '../utilities/ScrollToTop'

import config from "../../../data/SiteConfig";
import { css } from 'emotion'

const TemplateWrapper = ({ children }) => (
  <div
  className={css`
    display: grid;
    grid: minmax(100px, auto) / repeat(2, 1fr);
    background-color: #2196F3;
  `}>

    <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
    <LogoSection className="logoSection" />
    <ExquisiteCorpse className="exquisiteCorpse"/>
    <div className="mainIndexContent">{children}</div>
    <Footer className="footer"/>
    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
  </div>
)

export default TemplateWrapper
