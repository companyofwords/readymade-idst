import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { FacebookProvider, Like } from 'react-facebook'
import TitleSlider from "./TitleSlider"
import Chip from '@material-ui/core/Chip'

import { css } from 'emotion'

const chipstyle = css``

const tagline = css``

const mainlogo = css``

const logosidebar = css``

const idstgrid = css``

const idstgrids = css``

const givegrid = css``

const logogrid = css`  
          grid-column: 2 / -1;
          background: #373142;
          color: white;
          padding: 10px;
    
          display: grid;
          grid-template-columns: 1fr 1fr;
        `

const GallerySection = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfOptions {
          id
          wordpress_id
          options {
            logo {
              id
            }
            title
            sitesubtitle
            sitemaintitle
            sitedescription
            sitelongread
            backuptoptext
            allrightsreserved
            copyright
            donatetext
            donatelink
            weneed {
              item
              itemnumber
            }
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
        wordpressWpApiMenusMenusItems(slug: { eq: "main-nav" }) {
          items {
            title
            object_slug
            url
            wordpress_id
            wordpress_children {
              wordpress_id
              title
              url
              object_slug
            }
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
      }
    `}
    render={data => (
      <div className={logogrid}>


           

            
            
      </div>
    )}
  />
)

export default GallerySection
