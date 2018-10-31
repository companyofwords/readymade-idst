import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../Top/Navbar'
import Footer from '../Footer/Footer'
import ScrollButton from '../utilities/ScrollToTop'

import config from "../../../data/SiteConfig";
import { ThemeProvider } from 'emotion-theming';

import {mytheme} from '../../styles/globalStyles';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={mytheme}>
    <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
    <Navbar />
    <div>{children}</div>
    <Footer/>
    <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
  </ThemeProvider>
)

export default TemplateWrapper
