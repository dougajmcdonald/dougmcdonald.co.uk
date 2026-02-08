import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../templates/layout'
import Lede from '../components/lede'
import PostLink from '../components/postlink'

const BlogPage = ({
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
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Philosophy & Thoughts
        </h1>
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
      </div>
      <div className="mt-16 border-t border-slate-100">
        {posts}
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
                gatsbyImageData(
                  width: 220
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
  }
`
