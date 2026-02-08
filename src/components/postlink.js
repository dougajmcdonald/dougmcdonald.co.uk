import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Date from "../components/post-date"

const PostLink = ({ post: { excerpt, frontmatter } }) => {
  const image = getImage(frontmatter.image)
  return (
    <Link
      to={frontmatter.path}
      className="group block border-b border-slate-100 py-8 first:pt-0"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {image && (
          <div className="md:w-1/3 shrink-0">
            <div className="rounded-lg overflow-hidden md:aspect-video bg-slate-100">
              <GatsbyImage
                image={image}
                alt="article lead"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        )}
        <div className="flex flex-col justify-center">
          <Date>{frontmatter.date}</Date>
          <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors">
            {frontmatter.title}
          </h3>
          <p className="text-slate-600 leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}
export default PostLink
