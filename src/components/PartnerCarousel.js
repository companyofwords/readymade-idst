import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Carousel from 'nuka-carousel'


const PartnerCarousel = () => (
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
    
      <Carousel slidesToShow={3} autoplay={true} autoplayInterval={9000} easing="easeInOutElastic" speed={200} wrapAround={true}>
      {data.allWordpressWpPartners.edges.map(edge => (
          <div key={edge.node.id}>
          <Link to={edge.node.acf.link} style={{
            color: '#000',
            marginRight: '2em',
          }}>
          <img key={edge.node.acf.frontimage.id} src={`${edge.node.acf.frontimage.source_url}`} alt={`${edge.node.title}`}/>
          <h1>{edge.node.title}</h1>
          
          </Link>
          </div>
        ))}
      </Carousel>
      
    )}
  />
)

export default PartnerCarousel
