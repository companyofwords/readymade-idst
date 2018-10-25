import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../images/logo.svg'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { FacebookProvider, Like } from 'react-facebook'

const LogoSection = () => (
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
            logo {
              localFile {
                childImageSharp {
                  resize(width: 180, height: 180) {
                    src
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
      <div>
        
        <Link to="/">
              <figure>
                <img src={data.wordpressAcfOptions.options.logo.localFile.childImageSharp.resize.src} alt={data.wordpressAcfOptions.options.title} style={{ width: '88px' }} />
                
              </figure>
            </Link>
            <h2>{data.wordpressAcfOptions.options.sitesubtitle}</h2>
            <p>{data.wordpressAcfOptions.options.sitedescription}</p>
        
      </div>
    )}
  />
)

export default LogoSection