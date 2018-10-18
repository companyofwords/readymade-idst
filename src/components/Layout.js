import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

import config from "../../data/SiteConfig";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={`${config.siteTitle} | ${config.siteDescription}`} />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
