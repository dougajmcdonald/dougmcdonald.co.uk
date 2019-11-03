import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <Link
    to={post.frontmatter.path}
    className="flex flex-row mt-3xl no-underline"
  >
    <img
      src={post.frontmatter.image}
      alt="article lead"
      className="w-7xl inline-block mr-3xl"
    />
    <div className="w-2/3 flex flex-col inline-block">
      <h3>{post.frontmatter.title}</h3>
      <p className="leading-relaxed">{post.excerpt}</p>
    </div>
  </Link>
)
export default PostLink
