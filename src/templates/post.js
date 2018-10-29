import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import config from "../../data/SiteConfig"
import PostComments from "../components/Comments";

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  location,
  eventsummary,
  entry,
  entrylink,
  facebookevent,
  partners,
  creators,
  title,
  tagline,
  organisers,
  frontimage,
  frontimagetitle,
  date,
  helmet,
  slug,
  id
}) => {
  return (
    <section className="section">
      {helmet || ''}
      <div className="content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
        
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light" dangerouslySetInnerHTML={{ __html: title }}>
            </h1>
            <h2 className="title has-text-weight-bold is-bold-light" dangerouslySetInnerHTML={{ __html: tagline }}>
            </h2>
            <img src={`${frontimage}`} alt={`${frontimagetitle}`}/>

            {location && location.length ? (
                <div>
             <p>Location: </p><p className="is-bold-light" dangerouslySetInnerHTML={{ __html: location }}></p> 
                </div>
              ) : null}

            {entry && entry.length ? (
                <div>
             <p>Entry: </p><p className="is-bold-light" dangerouslySetInnerHTML={{ __html: entry }}></p> 
                </div>
              ) : null}

            {entrylink && entrylink.length ? (
                <div>
             <p>Entry Link: </p><p className="is-bold-light" dangerouslySetInnerHTML={{ __html: entrylink }}></p> 
                </div>
              ) : null}

            {facebookevent && facebookevent.length ? (
                <div>
             <p>Facebook Event: </p><p className="is-bold-light" dangerouslySetInnerHTML={{ __html: facebookevent }}></p> 
                </div>
              ) : null}

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
                      <li key={`${category.slug}`}>
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
                      <li key={`${tag.slug}`}>
                        <Link to={`/tags/${tag.slug}/`} dangerouslySetInnerHTML={{ __html: tag.name }}> 
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              
              {partners && partners.length ? (
                <div>
                  <h4>Partners</h4>
                  <ul className="taglist">
                    {partners.map(partner => (
                      <li key={`${partner.idnumber}`}>
                      <img src={partner.image.localFile.childImageSharp.resize.src} alt={partner.name} style={{ width: '88px' }} />
                        <Link to={`${partner.link}`} dangerouslySetInnerHTML={{ __html: partner.name }}> 
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {creators && creators.length ? (
                <div>
                  <h4>Creators</h4>
                  <ul className="taglist">
                    {creators.map(creator => (
                      <li key={`${creator.idnumber}`}>
                      <img src={creator.image.localFile.childImageSharp.resize.src} alt={creator.name} style={{ width: '88px' }} />
                        <Link to={`${creator.link}`} dangerouslySetInnerHTML={{ __html: creator.name }}> 
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

            </div>
          </div>
        </div>
        <PostComments slug={slug} post={id}/>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
  //helmet: PropTypes.instanceOf(Helmet),
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
        location={post.acf.location}
        eventsummary={post.acf.eventsummary}
        entry={post.acf.entry}
        entrylink={post.acf.entrylink}
        facebookevent={post.acf.facebookevent}
        partners={post.acf.partners}
        creators={post.acf.creators}
        title={post.title}
        tagline={post.acf.tagline}
        organisers={post.acf.organisers}
        frontimage={post.acf.frontimage.url}
        frontimagetitle={post.acf.frontimage.title}
        date={post.date}
        slug={post.slug}
        id={post.id}
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
        location
        eventsummary
        entry
        entrylink
        facebookevent
        partners {
          name
          link
          idnumber
          image {
            localFile {
              childImageSharp {
                resize(width: 180, height: 180) {
                  src
                }
              }
            }
          }
        }
        creators {
          name
          link
          idnumber
          image {
            localFile {
              childImageSharp {
                resize(width: 180, height: 180) {
                  src
                }
              }
            }
          }
        }
        tagline
        organisers
        frontimage {
          url
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
