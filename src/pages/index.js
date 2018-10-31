import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import IndexLayout from '../components/layout/IndexLayout'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { css } from 'emotion'

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
    
    console.table(data.allWordpressPost)

    return (
  <IndexLayout>
          <div
  className={css`
    grid-column: 1 / 4;
    font-family: 'Permanent Marker';

    h1 {
      background-color: white;
      padding-left: 10px;
      padding-right: 10px;
      text-decoration: none;
      color: #373142;
    }

    a {
      text-decoration: none;
    }
  `}>
            {posts.map(({ node: post }) => (
              
              <div key={post.id}>
    
              <ExpansionPanel expanded={expanded === `${post.id}`} onChange={this.handleChange(`${post.id}`)} style={{backgroundImage: `url("${post.acf.frontimage.localFile.childImageSharp.resize.src}")`, backgroundSize: `cover`}}>
              
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon enter="true" exit="true" />}>
              { post.acf.frontimage.localFile.childImageSharp.resize.src && post.acf.frontimage.localFile.childImageSharp.resize.src.length ? (
                <img src={post.acf.frontimage.localFile.childImageSharp.resize.src} style={{ width: '30px', height: '10px' }} />
                ) : ''}
                
              <div>  
              <h1>
                  <Link to={post.slug}>
                    <span className="" dangerouslySetInnerHTML={{ __html: post.title }}></span> 
                  </Link>
                </h1>
                
                {post.acf.finishingdate && post.acf.finishingdate.length ? (
                <div>
             <p className="" dangerouslySetInnerHTML={{ __html: post.acf.finishingdate }}></p> 
                </div>
              ) : ''}
                </div>
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
              
              </div>
                  
            ))}
        </div>
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
            finishingdate
            toolsrequired
            skilllevel
            location
            eventsummary
            entry
            entrylink
            facebookevent
            tagline
            organisers
            frontimage {
              caption
              title
              link
              localFile {
                childImageSharp {
                  resize(width: 600, height: 180) {
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
