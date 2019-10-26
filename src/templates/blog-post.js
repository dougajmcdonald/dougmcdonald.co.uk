import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import tw from "tailwind.macro"

const StyledH1 = styled.h1`
  color: red;
`

const Button = tw.button`
  bg-blue hover:bg-blue-dark text-white p-2 rounded
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <StyledH1>{frontmatter.title}</StyledH1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Button>A tailwind button</Button>
      </div>
    </div>
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
