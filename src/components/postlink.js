import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path} className="postlink">
    <Img
      fixed={post.frontmatter.image.childImageSharp.resize}
      alt="article lead"
      width={post.frontmatter.image.childImageSharp.resize.width}
      height={post.frontmatter.image.childImageSharp.resize.height}
      className="w-7xl inline-block mr-3xl"
    />
    <div className="w-2/3 flex flex-col inline-block">
      <h3 className="mt-auto mb-sm">{post.frontmatter.title}</h3>
      <p className="leading-relaxed">{post.excerpt}</p>
    </div>
  </Link>
)
export default PostLink
