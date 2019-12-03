import PropTypes from "prop-types"
import React from "react"
import "typeface-source-sans-pro"
import "typeface-source-code-pro"
import "typeface-archivo-narrow"
import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"
import "./prism.css"

const Layout = ({ children }) => (
  <div className="flex flex-col">
    <Header />
    <main className="flex-1 w-3/4 md:w-3/5 mx-auto h-screen min-h-full mb-5xl">
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
