import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Date from "../components/post-date"

const PostLink = ({ post: { excerpt, frontmatter } }) => (
  <Link
    to={frontmatter.path}
    className="post-link flex flex-row mt-3xl no-underline flex-wrap md:flex-no-wrap md:mt-5xl"
  >
    <Img
      fixed={frontmatter.image.childImageSharp.fixed}
      alt="article lead"
      className="inline-block mr-sm md:mr-3xl"
    />
    <div className="flex flex-col inline-block md:w-2/3 mt-base md:mt-auto">
      <Date>{frontmatter.date}</Date>
      <h3 className="post-title">{frontmatter.title}</h3>
      <span className="inline-block w-5xl h-xxxs bg-primary mb-lg"></span>
      <p className="leading-relaxed">{excerpt}</p>
    </div>
  </Link>
)
export default PostLink
