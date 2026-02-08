import React from 'react'
import { Link } from 'gatsby'

const FooterLink = ({ path, text }) => (
  <Link
    className="hover:text-slate-900 transition-colors"
    to={path}
  >
    {text}
  </Link>
)

export default FooterLink
