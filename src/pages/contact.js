import React from 'react'

import Layout from '../templates/layout'
import Lede from '../components/lede'

const ContactPage = () => {
  return (
    <Layout>
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Get in touch
        </h1>
        <Lede>
          <p>
            I'd love to hear from you if you want to discuss any of my blog posts,
            design systems, or just chat about technology.
          </p>
          <p>
            I believe communication is the key to solving problems. Solve a problem and give me a shout!
          </p>
        </Lede>

        <div className="mt-12 space-y-8">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
            <a
              href="mailto:dougajmcdonald@gmail.com"
              className="text-xl text-slate-600 hover:text-slate-900 transition-colors underline decoration-slate-200 hover:decoration-slate-900 underline-offset-4"
            >
              dougajmcdonald@gmail.com
            </a>
            <p className="text-sm text-slate-500 mt-2">
              Drop me an email, like the good old days.
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Social</h3>
            <div className="flex gap-6">
              <a
                href="https://twitter.com/dougajmcdonald"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Twitter/X
              </a>
              <a
                href="https://github.com/dougajmcdonald"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/dougajmcdonald"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-2">
              I still write code and design things when I have time.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
