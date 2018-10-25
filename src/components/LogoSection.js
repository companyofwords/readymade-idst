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
                <img src={logo} alt="IDST!" style={{ width: '88px' }} />
              </figure>
            </Link>
        
      </div>
    )}
  />
)

export default LogoSection
