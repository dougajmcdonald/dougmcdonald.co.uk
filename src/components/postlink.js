import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post: { excerpt, frontmatter } }) => (
  <Link
    to={frontmatter.path}
    className="post-link flex flex-row mt-3xl no-underline flex-wrap md:flex-no-wrap md:mt-5xl"
  >
    <img
      src={frontmatter.image.childImageSharp.resize.src}
      alt="article lead"
      width={frontmatter.image.childImageSharp.resize.width}
      height={frontmatter.image.childImageSharp.resize.height}
      className="inline-block mr-sm lg:mr-3xl"
    />
    <div className="flex flex-col inline-block md:w-2/3 mt-base md:mt-auto">
      <span className="date">{frontmatter.date}</span>
      <h3 className="post-title">{frontmatter.title}</h3>
      <span className="inline-block w-5xl h-xxxs bg-primary mb-lg"></span>
      <p className="leading-relaxed">{excerpt}</p>
    </div>
  </Link>
)
export default PostLink
