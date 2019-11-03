import PropTypes from "prop-types"
import React from "react"
import "typeface-source-sans-pro"
import "typeface-archivo-narrow"
import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"

const Layout = ({ children }) => (
  <div className="flex flex-col">
    <Header />

    <main className="flex-1 w-2/3 mx-auto h-screen min-h-full">{children}</main>

    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
