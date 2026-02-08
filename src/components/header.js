import React from 'react'
import { Link } from 'gatsby'

const navLinks = [
  {
    text: `Work`,
    to: `/#work`,
  },
  {
    text: `Philosophy`,
    to: `/blog`,
  },
  {
    text: `About`,
    to: `/about`,
  },
]

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
      <Link to="/" className="flex items-center space-x-2 font-bold tracking-tight text-slate-900 group">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white text-xs group-hover:bg-slate-800 transition-colors">
          DM
        </span>
        <span className="hidden sm:inline-block">Doug McDonald</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium">
        {navLinks.map(link => (
          <Link
            key={link.to}
            className="text-slate-500 transition-colors hover:text-slate-900"
            to={link.to}
          >
            {link.text}
          </Link>
        ))}
        <a
          className="hidden rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-slate-700 sm:inline-block"
          href="mailto:dougajmcdonald@gmail.com"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
)

export default Header
