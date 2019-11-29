import React from "react"
import { Link } from "gatsby"

import Github from "../images/logo-github.svg"
import Twitter from "../images/logo-twitter.svg"

const Footer = () => (
  <footer className="w-full relative h-full hidden md:inline-block">
    <section className="flex flex-col items-center">
      <svg
        className="absolute left-0 w-1/4 md:w-1/6 text-primary"
        viewBox="50 0 100 100"
      >
        <g transform="rotate(315)">
          <rect height="300px" width="12%" className="fill-current"></rect>
        </g>
      </svg>
      <nav className="text-access-grey font-display tracking-widest uppercase mt-3xl">
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
          <Github className="w-lg h-lg text-access-grey fill-current mr-lg hover:text-primary" />
        </a>
        <a href="https://www.twitter.com/dougajmcdonald">
          <Twitter className="w-lg h-lg text-access-grey fill-current hover:text-primary" />
        </a>
      </div>
      <span className="text-primary font-display tracking-widest">
        dougmcdonald.co.uk &copy; 2019
      </span>
    </section>
  </footer>
)

export default Footer
