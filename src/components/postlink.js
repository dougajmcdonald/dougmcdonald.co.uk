import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostLink = ({ post }) => (
  <Link
    to={post.frontmatter.path}
    className="flex flex-row mt-3xl no-underline"
  >
    <Img
      fixed={post.frontmatter.image.childImageSharp.fixed}
      alt="article lead"
      className="w-7xl inline-block mr-3xl"
    />
    <div className="w-2/3 flex flex-col inline-block">
      <h3>{post.frontmatter.title}</h3>
      <p className="leading-loose">{post.excerpt}</p>
    </div>
  </Link>
)
export default PostLink
