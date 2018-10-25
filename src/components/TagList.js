import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../images/logo.svg'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { FacebookProvider, Like } from 'react-facebook'

const Navbar = () => (
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
      <Toolbar  variant="dense"> 
        <div>
        <Link to="/">
              <figure className="image">
                <img src={logo} alt="IDST!" style={{ width: '88px' }} />
              </figure>
            </Link>
          </div>
          
        
                {data.wordpressWpApiMenusMenusItems.items.map((item) =>
                    <Typography color="inherit" noWrap key={`/${item.wordpress_id}`}>
                        <Link to={`/${item.object_slug}`} style={{
          }}>
                            {item.title}
                        </Link>
                        
                            {item.wordpress_children && item.wordpress_children.map((subitem) =>
                                <span key={item.wordpress_id}>
                                    <Link to={subitem.object_slug}>
                                        {subitem.title}
                                    </Link>
                                </span>
                            )}
                        
                    </Typography>
                )}
             
      </Toolbar>
      <FacebookProvider appId="555701548185468">
      <Like href="http://www.facebook.com/inourmidsts" colorScheme="dark" showFaces share />
        </FacebookProvider>
      </div>
    )}
  />
)

export default Navbar
