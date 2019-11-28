import React from "react"
import { graphql } from "gatsby"

import Layout from "../templates/layout"
import Lede from "../components/lede"
import PostLink from "../components/postlink"

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <Lede></Lede>
      <h2>Blog</h2>
      {posts}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                resize(width: 220) {
                  src
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`
