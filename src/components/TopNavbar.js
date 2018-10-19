import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'


const TopNavbar = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems(slug: { eq: "header" }) {
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
        <ul>
                {data.wordpressWpApiMenusMenusItems.items.map((item) =>
                    <li key={`/${item.wordpress_id}`}>
                        <Link to={`/${item.object_slug}`} style={{
            color: '#000',
            marginRight: '2em',
          }}>
                            {item.title}
                        </Link>
                        <ul>
                            {item.wordpress_children && item.wordpress_children.map((subitem) =>
                                <li key={item.wordpress_id}>
                                    <Link to={subitem.object_slug}>
                                        {subitem.title}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>  

        </div>
          
        </div>
      </nav>
    )}
  />
)

export default TopNavbar
