import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { FacebookProvider, Like } from 'react-facebook'
import Chip from '@material-ui/core/Chip'

import { css } from 'emotion'


const chipstyle = css`
`

const fbooklikes = css`
`

const paragraph = css`
          padding: 0 20px 20px;
          max-width: 240px;

        h4 {
          font-family: "Permanent Marker";
          color: white;
          font-size: 1.8em;
        }
        
        .${fbooklikes} {
          padding:20px;
          margin-top: 20px;
          border-top: 2px white solid;
          color: white;
          overflow : auto;
          display: inline-block;

          & span {
            color: white;
          }
        }
        .${chipstyle} {
          margin-right: 5px;
          margin-bottom: 5px;
        }
      
        `

const TagList = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressTag {
            edges {
              node {
                id
                name
                link
                slug
              }
            }
          }
         allWordpressCategory {
          edges {
            node {
              id
              name
              link
              slug
            }
          }
      }
    }
    `}
    render={
      data => (
        
      <div className={paragraph}>
      
        
      <h4>Tags</h4>
                {data.allWordpressTag.edges.map(({ node: tag }) =>
                    <span key={tag.id}>

                                <Chip 
        className={chipstyle}
        label={tag.name}
        component="a"
        href={`/tags/${tag.slug}/`}
        clickable
      />            

      
      </span>
                )}
      <h4>Categories</h4>

      {data.allWordpressCategory.edges.map(({ node: tag }) =>
                    <span key={tag.id}>
      <Chip 
        className={chipstyle}
        label={tag.name}
        component="a"
        href={`/tags/${tag.slug}/`}
        clickable
      />  
      </span>
                )}
      <div className={fbooklikes}>
      <FacebookProvider appId="555701548185468">
      <Like href="http://www.facebook.com/inourmidsts" colorScheme="dark" showFaces shares width="140px"/>
        </FacebookProvider>
        </div>           
      </div>
    )}
  />
)

export default TagList
