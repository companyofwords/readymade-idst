import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

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
        <div className="navbar-brand">
        <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
              </figure>
            </Link>
          </div>
          <div className="navbar-start">
        {data.wordpressWpApiMenusMenusItems.items.map(item => (
          <Link key={`/${item.wordpress_id}`} to={`/${item.object_slug}`} style={{
            color: '#000',
            marginRight: '2em',
          }}>  {item.title} </Link>
        ))}
        </div>
        </div>
      </nav>
    )}
  />
)

export default Footer
