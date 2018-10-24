import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(slug: { eq: "footer" }) {
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
      <nav className="navbar is-transparent">
      <div className="container">
      <div className="navbar-start">
        <div>
          <span>© {(new Date().getFullYear())} IDST! CIC</span>
                {data.wordpressWpApiMenusMenusItems.items.map((item) =>
                    <span key={`/${item.wordpress_id}`}>
                        <Link to={`/${item.object_slug}`}>
                             | {item.title} |
                        </Link>
                        
                            {item.wordpress_children && item.wordpress_children.map((subitem) =>
                                <span key={item.wordpress_id}>
                                    <Link to={subitem.object_slug}>
                                        {subitem.title} |
                                    </Link>
                                </span>
                            )}
                    </span>
                )}
            </div>  
                             
        </div>
                              
        </div>
        
      </nav>
    )}
  />
)

export default Footer
