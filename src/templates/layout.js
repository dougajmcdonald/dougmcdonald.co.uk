import PropTypes from "prop-types"
import React from "react"
import "typeface-source-sans-pro"
import "typeface-source-code-pro"
import "typeface-work-sans"
import "typeface-archivo-narrow"
import Header from "../components/header"
import SEO from "../components/seo"
import Footer from "../components/footer"

import "./layout.css"
import "./prism.css"

const Layout = ({ children }) => (
  <div className="flex flex-col">
    <SEO />
    <Header />
    <main className="flex-1 w-3/4 md:w-3/5 mx-auto h-screen min-h-full mb-3xl">
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
