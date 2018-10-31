import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Carousel from 'nuka-carousel'

import { css } from 'emotion'

const FrontCarousel = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(slug: { eq: "main-nav" }) {
          items {
            title
            object_slug
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
        allWordpressWpSlide(sort: { fields: wordpress_id }, limit: 99) {
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
                    title
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
          }  
        }      
      }
    `}
    render={data => (
      <div
      className={css`
      height: 30%;
      width: 100%;

      img {
        height: 100%;
      }
    `}>
      <Carousel slidesToShow={1} autoplay={true} autoplayInterval={9000} wrapAround={true} withoutControls={true} width="100%">
      {data.allWordpressWpSlide.edges.map(edge => (
          <img key={edge.node.id} src={`${edge.node.acf.frontimage.localFile.childImageSharp.resize.src}`} alt={`${edge.node.title}`}/>
        ))}
      </Carousel>
      </div>
    )}
  />
)

export default FrontCarousel
