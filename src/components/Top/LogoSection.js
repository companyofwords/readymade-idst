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

        
        .${mainlogo} {
          grid-column: 1 / 2;
        }

        .${logosidebar} {
          grid-column: 2 / 3;
        }

        .${tagline} {
          margin-right: 5px;
          margin-bottom: 5px;
        }

        .${idstgrid} {

          display:grid;
          grid-column: 1 / -1;
          grid-template-columns: repeat(4, 1fr);
        }

        .${idstgrids} {
          margin-right: 5px;
          margin-bottom: 5px;
        }

        .${givegrid} {
          padding: 20px;
          display:grid;
        }
        
        .${chipstyle} {
          margin-top: 25px;
          margin-bottom: 5px;
          align-self: center;
          justify-self: center;
        }
        `

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

      <div className={idstgrid}>
            <div className={idstgrids}>
            
            <span> <TitleSlider
            items={[`Idiot`, `Infantile`, `Ingrates`, `Invisible` ]}
            color={`white`}
            backgroundColor={`black`}
            position={`absolute`}
            delay={`0.5s`}
            delay2={`2.5s`}
            delay3={`7s`}
            delay4={`9s`}
          /></span>
            
            </div>
            <div className={idstgrids}>
            
            <span>
          <TitleSlider
            items={[`Derelict`, `Disasters`, `Dynamite`, `Delinquents`]}
            color={`white`}
            backgroundColor={`black`}
            position={`absolute`}
            delay={`0s`}
            delay2={`3s`}
            delay3={`6.5s`}
            delay4={`10s`}
          />
          </span>
            
            </div>

            <div className={idstgrids}>
            
            <span>
          <TitleSlider
            items={[`Serious`, `Sentient`, `Sensitive`, `Severe`]}
            color={`white`}
            backgroundColor={`black`}
            position={`absolute`}
            delay={`0.2s`}
            delay2={`4s`}
            delay3={`6s`}
            delay4={`9.5s`}
          />
          </span>
            
            </div>

            <div className={idstgrids}>
            
            <span>
          <TitleSlider
            items={[`Transmogrify`, `Theatre`, `Tyrants`, `Trains`]}
            color={`white`}
            backgroundColor={`black`}
            position={`absolute`}
            delay={`0.5s`}
            delay2={`3s`}
            delay3={`8s`}
            delay4={`9.5s`}
          />
          </span>
            
            </div>
            
            </div>


            <div className={mainlogo}>
              <Link to="/">
                <img src={data.wordpressAcfOptions.options.logo.localFile.childImageSharp.resize.src} alt={data.wordpressAcfOptions.options.title} />
                </Link> 
            <div className={tagline}>
            <h2>{data.wordpressAcfOptions.options.sitesubtitle}</h2>
            <p>{data.wordpressAcfOptions.options.sitedescription}</p>
            </div> 
            </div>
          
            <div className={logosidebar}>
            
            
          
          
          <div className={givegrid}>
            {data.wordpressAcfOptions.options.weneed && data.wordpressAcfOptions.options.weneed.length ? (
                <div>
                  <h4>We Need:</h4>
                    {data.wordpressAcfOptions.options.weneed.map(weneed => (
                      <div key={weneed.itemnumber}><li>- {weneed.item}</li></div>
                      
                    ))}
                  
                </div>
              ) : null}
          <Chip
        className={chipstyle}
        label={data.wordpressAcfOptions.options.donatetext}
        component="a"
        href={`${data.wordpressAcfOptions.options.donatelink}`}
        clickable
      />  
      </div>

            </div>

            
            
      </div>
    )}
  />
)

export default LogoSection
