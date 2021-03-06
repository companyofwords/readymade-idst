import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allWordpressPost.edges
    const postLinks = posts.map(post => (
      <li key={post.node.slug}>
        <Link to={post.node.slug}>
          <h2 className="is-size-2" dangerouslySetInnerHTML={{ __html: post.node.title }}> 
          </h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.name
    const title = this.props.data.site.siteMetadata.title
    const tagline = this.props.data.site.siteMetadata.tagline
    const totalCount = this.props.data.allWordpressPost.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } in the “${tag}” category`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title} | ${tagline}`} />
          <div className="content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light" dangerouslySetInnerHTML={{ __html: tagHeader }}> 
                </h3>
                <ul className="categorylist">{postLinks}</ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
        tagline
      }
    }
    allWordpressPost(filter: { categories: { slug: { eq: $slug } } }) {
      totalCount
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`
