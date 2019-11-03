import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/layout"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <span className="date">{frontmatter.date}</span>
      <h1>{frontmatter.title}</h1>
      <span className="inline-block h-sm bg-primary w-6xl mb-2xl mt-sm"></span>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
