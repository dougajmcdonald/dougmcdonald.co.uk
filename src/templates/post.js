import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/layout"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <span className="date">{frontmatter.date}</span>
          <h1>{frontmatter.title}</h1>

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <button className="btn">A tailwind button</button>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
