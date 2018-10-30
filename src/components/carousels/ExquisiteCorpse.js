import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Carousel from 'nuka-carousel'
import FrontCarousel from './FrontCarousel'
import PartnerCarousel from './PartnerCarousel'
import { css } from 'emotion'

const ExquisiteCorpse = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(slug: { eq: "main-nav" }) {
          items {
            title
            object_slug
            url
          }
        }
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
              
            }
          }
        }
        allWordpressWpPartners(sort: { fields: wordpress_id }, limit: 99) {
          edges { 
            node {
              id
              title
              acf {
                link
                frontimage {
                    id
                    link
                    caption
                    source_url
                    title
                          }
                  }
                }
          }  
        }      
      }
    `}
    render={data => (
      <div
      className={css`
      grid-area: 1 / 1 / 3 / span 1;
      z-index: 1;
      max-height: 550px;
      overflow: hidden;
    `}>
      <FrontCarousel />
      <FrontCarousel />
      <FrontCarousel />
      </div>
      
    )}
  />
)

export default ExquisiteCorpse
