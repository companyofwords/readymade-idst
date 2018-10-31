import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { FacebookProvider, Like } from 'react-facebook'

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
      <div>
      
        
      <h4>Tags</h4>
                {data.allWordpressTag.edges.map(({ node: tag }) =>
                    <div key={tag.id}>
                       
                       <span><Link to={`/tags/${tag.slug}/`} dangerouslySetInnerHTML={{ __html: tag.name }}> 
                                </Link></span>
      
                                

      
      </div>
                )}
      <h4>Categories</h4>

      {data.allWordpressCategory.edges.map(({ node: tag }) =>
                    <div key={tag.id}>
                       
                    <span><Link to={`/tags/${tag.slug}/`} dangerouslySetInnerHTML={{ __html: tag.name }}> 
                                </Link></span>
      
                                

      
      </div>
                )}
             
      
      <FacebookProvider appId="555701548185468">
      <Like href="http://www.facebook.com/inourmidsts" colorScheme="dark" showFaces share />
        </FacebookProvider>
      </div>
    )}
  />
)

export default TagList
