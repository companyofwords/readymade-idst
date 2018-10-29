import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import IndexLayout from '../components/IndexLayout'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default class IndexPage extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { data } = this.props
    const { edges: posts } = data.allWordpressPost
    const { expanded } = this.state
    

    return (
      <IndexLayout>
        
            {posts.map(({ node: post }) => (
              
              <div key={post.id}>
              { post.acf.frontimage.url !== '' ? (
              <ExpansionPanel expanded={expanded === `${post.id}`} onChange={this.handleChange(`${post.id}`)} style={{backgroundImage: `url("${post.acf.frontimage.url}")`}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon enter="true" exit="true" />}>
              
                <h1>
                  <Link to={post.slug}>
                    {post.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.date}</small>
                </h1>
                <br/>
                <h1><small>{post.date}</small></h1>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <img src={`${post.acf.frontimage.url}`}/>
            
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                    }}
                  />
                  
                  <Link to={post.slug}>
                    Keep Reading →
                  </Link>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              ) : ( //or without ACF
                <ExpansionPanel expanded={expanded === `${post.slug}`} onChange={this.handleChange(`${post.slug}`)}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon enter="true" exit="true" />}>
                
                  <h1>
                    <Link to={post.slug}>
                      {post.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.date}</small>
                  </h1>
                  <br/>
                  <h1><small>{post.date}</small></h1>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>

                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                      }}
                    />
                    
                    <Link to={post.slug}>
                      Keep Reading →
                    </Link>
                  </ExpansionPanelDetails>
                </ExpansionPanel>  
              )}
              </div>
                  
            ))}

      </IndexLayout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          author 
          date(formatString: "MMMM DD, YYYY")
          slug
          _links {
            wp_featuredmedia {
              href
            }
          }
          acf {
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
        }
      }
    }
    wordpressPost{
      id
      title
      excerpt
      author 
      date(formatString: "MMMM DD, YYYY")
      slug
      _links {
        wp_featuredmedia {
          href
        }
      }
      acf {
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
    }
  }
`
