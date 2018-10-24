import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
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
      <Layout>
        
            {posts.map(({ node: post }) => (
              <div key={post.id}>
              <ExpansionPanel expanded={expanded === `${post.id}`} onChange={this.handleChange(`${post.id}`)} style={{backgroundImage: `url("${post.acf.frontimage.source_url}")`}}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              
                <h1>
                  <Link className="has-text-primary" to={post.slug}>
                    {post.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.date}</small>
                </h1>
                <br/>
                <h1><small>{post.date}</small></h1>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <img src={`${post.acf.frontimage.source_url}`}/>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                    }}
                  />
                  
                  <Link className="button is-small" to={post.slug}>
                    Keep Reading →
                  </Link>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              </div>
            ))}
      </Layout>
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
          acf {
            tagline
            organisers
            frontimage {
              link
              caption
              source_url
              title
            }
          }
        }
      }
    }
  }
`
