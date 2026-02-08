import PropTypes from "prop-types"
import React from "react"
import "@fontsource/inter"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import Header from "../components/header"
import Seo from "../components/seo"
import Footer from "../components/footer"

import "./layout.css"
import "./prism.css"

const Layout = ({ children, containerClass }) => (
  <div className="flex flex-col min-h-screen">
    <Seo />
    <Header />
    <main
      className={
        containerClass ||
        "flex-1 w-full max-w-4xl mx-auto min-h-full px-6 md:px-8 py-24"
      }
    >
      {children}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  containerClass: PropTypes.string,
}

export default Layout
