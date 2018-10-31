import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import config from "../../data/SiteConfig"
import PostComments from "../components/Post/PostComments"
import Chip from '@material-ui/core/Chip'

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  location,
  toolsrequired,
  skilllevel,
  prize,
  finishingdate,
  entry,
  entrylink,
  facebookevent,
  partners,
  creators,
  title,
  tagline,
  organisers,
  frontimage,
  date,
  helmet,
  slug,
  id
}) => {
  return (
    <section className="">
      {helmet || ''}
      <div className="">
        <div className="">
          <div className="">
        
            <h1 className="" dangerouslySetInnerHTML={{ __html: title }}>
            </h1>
            <h2 className="" dangerouslySetInnerHTML={{ __html: tagline }}>
            </h2>
            
            {frontimage && frontimage.length ? (
                <div>
          <img src={`${frontimage.localFile.childImageSharp.resize.src}`} alt={`${frontimage.title}`}/>
                </div>
              ) : ''}

            {location && location.length ? (
                <div>
             <p>Location: </p><p className="" dangerouslySetInnerHTML={{ __html: location }}></p> 
                </div>
              ) : ''}

            {toolsrequired && toolsrequired.length ? (
                <div>
             <p>Tools Required: </p><p className="" dangerouslySetInnerHTML={{ __html: toolsrequired }}></p> 
                </div>
              ) : ''}
            
            {skilllevel && skilllevel.length ? (
                <div>
             <p>Skill Level: </p><p className="" dangerouslySetInnerHTML={{ __html: skilllevel }}></p> 
                </div>
              ) : ''}

            {prize && prize.length ? (
                <div>
             <p>Prize: </p><p className="" dangerouslySetInnerHTML={{ __html: prize }}></p> 
                </div>
              ) : ''}

            {finishingdate && finishingdate.length ? (
                <div>
             <p>Finishing Date: </p><p className="" dangerouslySetInnerHTML={{ __html: finishingdate }}></p> 
                </div>
              ) : ''}
            
            {entry && entry.length ? (
                <div>
             <p>Entry: </p><p className="" dangerouslySetInnerHTML={{ __html: entry }}></p> 
                </div>
              ) : ''}

            {entrylink && entrylink.length ? (
                <div>
             <p>Entry Link: </p><p className="" dangerouslySetInnerHTML={{ __html: entrylink }}></p> 
                </div>
              ) : ''}

            {facebookevent && facebookevent.length ? (
                <div>
             <p>Facebook Event: </p><p className="" dangerouslySetInnerHTML={{ __html: facebookevent }}></p> 
                </div>
              ) : ''}

            <p>Organisers: </p><p className="" dangerouslySetInnerHTML={{ __html: organisers }}>
            </p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div>
              <p>{date}</p>
              {categories && categories.length ? (
                <div>
                  <h4>Categories</h4>
                  
                    {categories.map(category => (
                      <span key={category.id}>

                      <Chip 
                      label={category.name}
                      component="a"
                      href={`/tags/${category.slug}/`}
                      clickable
                      />  
                      </span>
                    ))}
                
                </div>
              ) : null}
              {tags && tags.length ? (
                <div>
                  <h4>Tags</h4>
                  
                    {tags.map(tag => (
                      
                      <span key={tag.id}>

                      <Chip 
                      label={tag.name}
                      component="a"
                      href={`/tags/${tag.slug}/`}
                      clickable
                      />  
                      </span>
                    ))}
                  
                </div>
              ) : null}
              
              {partners && partners.length ? (
                <div>
                  <h4>Partners</h4>
                  <ul className="">
                    {partners.map(partner => (
                      <li key={`${partner.idnumber}`}>
                      <img src={partner.image.localFile.childImageSharp.resize.src} alt={partner.name} style={{ width: '88px' }} />
                        <Link to={`${partner.link}`} dangerouslySetInnerHTML={{ __html: partner.name }}> 
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : ''}

              {creators && creators.length ? (
                <div>
                  <h4>Creators</h4>
                  <ul className="">
                    {creators.map(creator => (
                      <li key={`${creator.idnumber}`}>
                      <img src={creator.image.localFile.childImageSharp.resize.src} alt={creator.name} style={{ width: '88px' }} />
                        <Link to={`${creator.link}`} dangerouslySetInnerHTML={{ __html: creator.name }}> 
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : ''}

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
        toolsrequired={post.acf.toolsrequired}
        skilllevel={post.acf.skilllevel}
        eventsummary={post.acf.eventsummary}
        prize={post.acf.prize}
        finishingdate={post.acf.finishingdate}
        entry={post.acf.entry}
        entrylink={post.acf.entrylink}
        facebookevent={post.acf.facebookevent}
        partners={post.acf.partners}
        creators={post.acf.creators}
        title={post.title}
        tagline={post.acf.tagline}
        organisers={post.acf.organisers}
        frontimage={post.acf.frontimage}
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
        prize
        finishingdate
        toolsrequired
        skilllevel
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
          caption
              title
              link
              localFile {
                childImageSharp {
                  resize(width: 180, height: 180) {
                    src
                  }
                }
              }
        }
      }
      tags {
        name
        slug
      }
    }
  }
`
