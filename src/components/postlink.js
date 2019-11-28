import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostLink = ({ post: { excerpt, frontmatter } }) => (
  <Link to={frontmatter.path} className="post-link">
    <Img
      fixed={frontmatter.image.childImageSharp.resize}
      alt="article lead"
      width={frontmatter.image.childImageSharp.resize.width}
      height={frontmatter.image.childImageSharp.resize.height}
      className="inline-block mr-3xl"
    />
    <div className="w-2/3 flex flex-col inline-block">
      <span className="date">{frontmatter.date}</span>
      <h3 className="post-title">{frontmatter.title}</h3>
      <span className="inline-block w-5xl h-xxxs bg-primary mb-lg"></span>
      <p className="leading-relaxed">{excerpt}</p>
    </div>
  </Link>
)
export default PostLink
