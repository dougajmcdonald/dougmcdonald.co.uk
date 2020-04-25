import React from 'react'
import { Link } from 'gatsby'

export default ({ path, text }) => (
  <Link
    className="mx-lg font-medium leading-loose border-b-2 border-transparent hover:border-primary"
    to={path}
  >
    {text}
  </Link>
)
