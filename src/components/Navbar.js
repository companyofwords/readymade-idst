import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import logo from '../images/logo.svg'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
      <Toolbar  variant="dense" className="toolbar"> 
        <div className="navbar-brand">
        <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="IDST!" style={{ width: '88px' }} />
              </figure>
            </Link>
          </div>
          
        
                {data.wordpressWpApiMenusMenusItems.items.map((item) =>
                    <Typography color="inherit" noWrap key={`/${item.wordpress_id}`}>
                        <Link to={`/${item.object_slug}`} style={{
            color: '#000',
            marginRight: '2em',
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
    )}
  />
)

export default Navbar
