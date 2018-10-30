import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { FacebookProvider, Like } from 'react-facebook'
import TitleSlider from "./TitleSlider"

import { css } from 'emotion'

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
            donatetext
            donatelink
            weneed {
              item
              itemnumber
            }
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
      <div
      className={css`
      grid-column: 4 / -1;
      background: #373142;
    `}>
        
        <Link to="/">
              <figure>
                <img src={data.wordpressAcfOptions.options.logo.localFile.childImageSharp.resize.src} alt={data.wordpressAcfOptions.options.title} style={{ width: '88px' }} />
                
              </figure>
            </Link>
            <h2>{data.wordpressAcfOptions.options.sitesubtitle}</h2>
            <p>{data.wordpressAcfOptions.options.sitedescription}</p>
            <Link to={`${data.wordpressAcfOptions.options.donatelink}`}>
            <p>{data.wordpressAcfOptions.options.donatetext}</p>
            </Link>
            
            <span> <span>We are:</span><TitleSlider
            items={[`Idiot`, `Infantile`, `Ingrates`, `Inbreds`]}
            color={`green`}
            backgroundColor={`red`}
            position={`absolute`}
          /></span>
          <br></br>
          <span>
          <TitleSlider
            items={[`Derelict`, `Disasters`, `Dynamite`, `Delinquents`]}
            color={`blue`}
            backgroundColor={`black`}
            position={`30px`}
          />
          </span>
          
            {data.wordpressAcfOptions.options.weneed && data.wordpressAcfOptions.options.weneed.length ? (
                <div>
                  <h4>We Need:</h4>
                  <ul className="taglist">
                    {data.wordpressAcfOptions.options.weneed.map(weneed => (
                      <li key={weneed.itemnumber}>
                      <p>{weneed.item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
        
      </div>
    )}
  />
)

export default LogoSection
