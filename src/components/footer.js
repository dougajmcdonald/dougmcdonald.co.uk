import React from "react"
import { Link } from "gatsby"

import Github from "../images/logo-github.svg"
import Twitter from "../images/logo-twitter.svg"

const Footer = () => (
  <footer className="w-full relative h-6xl mt-5xl">
    <svg className="absolute bottom-80 left-0" height="250">
      <g transform="translate(-60) rotate(315)">
        <rect width="40" height="450" fill="#2dcaca"></rect>
      </g>
    </svg>
    <section className="flex flex-col items-center mt-4xl">
      <nav className="text-access-grey font-display tracking-widest uppercase">
        <Link className="footerlink" to="">
          Home
        </Link>
        |
        <Link className="footerlink" to="">
          About
        </Link>
        |
        <Link className="footerlink" to="">
          Contact
        </Link>
      </nav>
      <div className="flex flex-row m-lg">
        <a href="https://www.github.com/dougajmcdonald">
          <Github className="w-lg h-lg text-access-grey fill-current mr-lg" />
        </a>
        <a href="https://www.twitter.com/dougajmcdonald">
          <Twitter className="w-lg h-lg text-access-grey fill-current" />
        </a>
      </div>
      <span className="text-primary font-display tracking-widest">
        dougmcdonald.co.uk 2019
      </span>
    </section>
  </footer>
)

export default Footer
