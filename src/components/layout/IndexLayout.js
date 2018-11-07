import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../Footer/Footer'
import TagList from '../Index/TagList'
import LogoSection from '../Top/LogoSection'
import ExquisiteCorpse from '../carousels/ExquisiteCorpse'
import ScrollButton from '../utilities/ScrollToTop'

import config from "../../../data/SiteConfig";
import { css } from 'emotion'

import { ThemeProvider, withTheme } from 'emotion-theming';

import '../../styles/globalStyles';
import globals from "../../styles/globals";

const nightTheme = {
  skyColor: '#2c3e50',
  celestialObjectColor: '#bdc3c7',
  celestialObjectBorderColor: '#eaeff2'
}


const TemplateWrapper = ({ children, globals }) => (
  <ThemeProvider theme={nightTheme}>
  
  <div
  className={css`
    display: grid;
    grid: minmax(50px, auto ) / repeat(2, 2fr 1fr);
    background-color: #2196F3;

    .mainIndexContent {
      grid-column: 1 / 4;
    }

    .footer {
      grid-column: 1 / -1;
    }

  `}>

    <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
    <LogoSection className="logoSection" />
    <GallerySection className="gallerySection" />
    <ExquisiteCorpse className="exquisiteCorpse"/>
    <div className="mainIndexContent">{children}</div>
    <TagList className="taglist" />
    <Footer className="footer"/>
    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
  </div>
  </ThemeProvider>
)

export default TemplateWrapper
