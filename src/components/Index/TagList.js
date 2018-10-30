import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { FacebookProvider, Like } from 'react-facebook'


import { css } from 'emotion'

const TagList = () => (
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
      background: #373142;
      color: white;
      padding: 10px;
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

export default TagList
