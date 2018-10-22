import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import Toolbar from '@material-ui/core/Toolbar'

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
      <Toolbar>
      <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
        <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
              </figure>
            </Link>
          </div>
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
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/GatsbyCentral/gatsby-starter-wordpress"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </nav>
      </Toolbar>
    )}
  />
)

export default Navbar
