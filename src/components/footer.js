import React from "react"
import { Link } from "gatsby"

import Github from "../images/logo-github.svg"
import Twitter from "../images/logo-twitter.svg"

const Footer = () => (
  <footer className="w-full relative h-full mb-4xl md:mb-auto">
    <section className="flex flex-col items-center mb-sm">
      <svg
        className="absolute left-0 w-1/4 md:w-1/6 text-primary"
        viewBox="50 0 100 100"
      >
        <g transform="rotate(315)">
          <rect height="300px" width="12%" className="fill-current"></rect>
        </g>
      </svg>
      <nav className="text-access-grey font-display tracking-widest uppercase mt-xl hidden md:inline-block">
        <Link className="footer-link" to="/">
          Blog
        </Link>
        |
        <Link className="footer-link" to="/about">
          About
        </Link>
        |
        <Link className="footer-link" to="/contact">
          Contact
        </Link>
      </nav>
      <div className="flex flex-row m-lg">
        <a href="https://www.github.com/dougajmcdonald">
          <Github className="w-xl h-xl text-access-grey fill-current mr-xl hover:text-primary" />
        </a>
        <a href="https://www.twitter.com/dougajmcdonald">
          <Twitter className="w-xl h-xl ml-xl text-access-grey fill-current hover:text-primary" />
        </a>
      </div>
      <span className="text-access-grey font-display tracking-widest">
        dougmcdonald.co.uk &copy; 2019
      </span>
    </section>
  </footer>
)

export default Footer
