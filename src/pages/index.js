import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../templates/layout'
import Lede from '../components/lede'
import PostLink from '../components/postlink'

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const posts = edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date && edge.node.frontmatter.draft === false
    )
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <h1>Making a difference is hard</h1>
      <Lede>
        <p>
          I lead teams, empower individuals and mentor colleagues. I build teams
          built on trust and self-belief.
        </p>
        <p>
          I’ve been a software engineer for over fifteen years and I’m
          passionate about creating excellent user experiences which meet
          business objectives and solve user problems.
        </p>
      </Lede>
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
            draft
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 220, webpQuality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
