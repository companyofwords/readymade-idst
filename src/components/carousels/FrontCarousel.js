import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Carousel from 'nuka-carousel'

import { css } from 'emotion'

const FrontCarousel = () => (
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
            exquisite_corpse {
              topimage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    src
                  }
                }
              }
              } 
              middleimage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    src
                  }
                }
              }
              } 
              bottomimage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    src
                  }
                }
              }
            }
            }
            weneed {
              item
              itemnumber
            }
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
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
                        resize(width: 430, height: 190, grayscale: true) {
                          src
                          width
                          height
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
      height: 35%;
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
