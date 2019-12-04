import React from "react"

import Layout from "../templates/layout"

export default () => {
  return (
    <Layout>
      <h2>Contact</h2>
      <p className="md:w-2/3">
        I'd love to hear from you if you want to discuss any of my blog posts,
        or in general. I believe communication is the key to solving problems,
        solve a problem and give me a shout!
        <a href="mailto:dougajmcdonald@gmail.com">Email me</a>
      </p>
    </Layout>
  )
}
