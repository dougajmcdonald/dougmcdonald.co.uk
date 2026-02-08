import React from 'react'

import Github from '../svg/logo-github.svg'
import Twitter from '../svg/logo-twitter.svg'
import FooterLink from '../components/footer-link'

const Footer = () => (
  <footer className="w-full border-t border-slate-100 py-12 mt-24">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between px-6 md:flex-row md:px-8">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-sm font-semibold text-slate-900 mb-2">
          Doug McDonald
        </span>
        <span className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>

      <div className="flex gap-6 mt-6 md:mt-0">
        <a
          href="https://github.com/dougajmcdonald"
          className="text-slate-400 hover:text-slate-900 transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5 fill-current" />
        </a>
        <a
          href="https://twitter.com/dougajmcdonald"
          className="text-slate-400 hover:text-slate-900 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-5 w-5 fill-current" />
        </a>
      </div>

      <nav className="flex gap-6 mt-6 md:mt-0 text-sm text-slate-500 font-medium">
        <FooterLink path="/#work" text="Work" />
        <FooterLink path="/blog" text="Philosophy" />
        <FooterLink path="/about" text="About" />
        <a href="mailto:dougajmcdonald@gmail.com" className="hover:text-slate-900 transition-colors">Contact</a>
      </nav>
    </div>
  </footer>
)

export default Footer
