import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import config from "../../data/SiteConfig";
import Helmet from 'react-helmet'

export const PageTemplate = ({ title, content }) => {
  return (
    <section>
    <Helmet title={` ${title} | ${config.siteTitle} | ${config.siteDescription}`} />
      <div className="">
        <div >
          <div >
            <div >
              <h2 dangerouslySetInnerHTML={{ __html: title }}>
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate title={page.title} content={page.content} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
