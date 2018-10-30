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
    grid: minmax(50px, 100%) / repeat(2, 2fr 1fr);
    background-color: #2196F3;

    .mainIndexContent {
      grid-column: 1 / 4;
    }

    .footer {
      grid-column: 1 / -1;
      background-color: green;
    }

  `}>

    <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
    <LogoSection className="logoSection" />
    <ExquisiteCorpse className="exquisiteCorpse"/>
    <div className="mainIndexContent">{children}</div>
    <TagList className="taglist" />
    <Footer className="footer"/>
    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
  </div>
)

export default TemplateWrapper
