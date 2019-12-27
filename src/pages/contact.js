import React from "react"

import Layout from "../templates/layout"

import Github from "../svg/logo-github.svg"
import Twitter from "../svg/logo-twitter.svg"
import Email from "../svg/md-mail-open.svg"

import Lede from "../components/lede"

export default () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <Lede>
        <p>
          I'd love to hear from you if you want to discuss any of my blog posts,
          or in general. I believe communication is the key to solving problems,
          solve a problem and give me a shout!
        </p>
      </Lede>
      <section className="flex mt-3xl mb-xl">
        <a
          href="mailto:dougajmcdonald@gmail.com"
          aria-label="Email"
          className="w-4xl"
        >
          <Email className="w-xl h-xl text-access-grey fill-current mr-xl hover:text-primary" />
        </a>
        <p className="w-full">Drop me an email, like the good old days.</p>
      </section>
      <section className="flex mb-xl">
        <a
          href="https://www.twitter.com/dougajmcdonald"
          aria-label="Github"
          className="w-4xl"
        >
          <Twitter className="w-xl h-xl text-access-grey fill-current hover:text-primary" />
        </a>
        <p className="w-full">Sometimes I tweet things, send me a tweet.</p>
      </section>
      <section className="flex mb-xl">
        <a
          href="https://www.github.com/dougajmcdonald"
          aria-label="Twitter"
          className="w-4xl"
        >
          <Github className="w-xl h-xl text-access-grey fill-current mr-xl hover:text-primary" />
        </a>
        <p className="w-full">
          I still write code and design things when I have time, take a look
          over on Github. Perhaps submit a Pull Request.
        </p>
      </section>
    </Layout>
  )
}
