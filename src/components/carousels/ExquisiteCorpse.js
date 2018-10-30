import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Carousel from 'nuka-carousel'


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
    
      <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      </div>
      
    )}
  />
)

export default ExquisiteCorpse
