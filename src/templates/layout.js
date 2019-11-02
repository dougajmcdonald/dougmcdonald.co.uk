import PropTypes from "prop-types"
import React from "react"
import "typeface-source-sans-pro"
import "typeface-archivo-narrow"
import Header from "../components/header"

import "./layout.css"

const Layout = ({ children }) => (
  <div className="flex flex-col">
    <Header />

    <main className="flex-1 w-2/3 mx-auto">{children}</main>

    <footer className="flex-1 w-full bg-green-500 h-5xl"></footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
