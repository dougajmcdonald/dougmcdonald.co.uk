import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <Link to={post.frontmatter.path} className="flex flex-row">
    <div className="w-6xl h-6xl inline-block mr-3xl">IMAGE</div>
    <div className="w-2/3 flex flex-col inline-block">
      <h3>{post.frontmatter.title}</h3>
      <p className="leading-relaxed">{post.excerpt}</p>
    </div>
  </Link>
)
export default PostLink
