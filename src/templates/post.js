import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import config from "../../data/SiteConfig"

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  tagline,
  organisers,
  frontimage,
  frontimagetitle,
  date,
  helmet,
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
        
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light" dangerouslySetInnerHTML={{ __html: title }}>
            </h1>
            <h2 className="title has-text-weight-bold is-bold-light" dangerouslySetInnerHTML={{ __html: tagline }}>
            </h2>
            <img src={`${frontimage}`} alt={`${frontimagetitle}`}/>
            <p>Organisers: </p><p className="is-bold-light" dangerouslySetInnerHTML={{ __html: organisers }}>
            </p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div style={{ marginTop: `4rem` }}>
              <p>{date}</p>
              {categories && categories.length ? (
                <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {categories.map(category => (
                      <li key={`${category}cat`}>
                        <Link to={`/categories/${category.slug}/`} dangerouslySetInnerHTML={{ __html: category.name }}> 
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {tags && tags.length ? (
                <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={`${tag}tag`}>
                        <Link to={`/tags/${tag.slug}/`} dangerouslySetInnerHTML={{ __html: tag.name }}> 
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.content}
        helmet={<Helmet title={`${post.title} | ${config.siteTitle} | ${config.siteDescription}`} />}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        tagline={post.acf.tagline}
        organisers={post.acf.organisers}
        frontimage={post.acf.frontimage.source_url}
        frontimagetitle={post.acf.frontimage.title}
        date={post.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      acf {
        tagline
        organisers
        frontimage {
          source_url
          caption
          title
        }
      }
      tags {
        name
        slug
      }
    }
  }
`
