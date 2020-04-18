import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className="h-5xl w-full mb-3xl md:mb-4xl">
    <div className="w-3/4 md:w-2/3 h-full flex flex-row mx-auto justify-center border-b-2 border-gray-200">
      <Link to="/" className="flex flex-row flex-1 items-start h-full">
        <svg
          className="self-center text-access-grey font-medium"
          height="54"
          width="54"
          viewBox="-50 -50 100 100"
        >
          <circle className="logo" r="44" />
          <text
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="xx-large"
            className="font-display fill-current"
            letterSpacing="0.1rem"
          >
            dm
          </text>
        </svg>
        <span className="self-center text-lg font-body ml-base inline-block leading-wider">
          DOUG MCDONALD
        </span>
      </Link>
      <nav className="w-full fixed bottom-0 left-0 flex flex-row items-center justify-center h-4xl bg-white upshadow md:shadow-none pb-xxs z-50 md:relative md:ml-3xl md:h-auto md:flex-1 uppercase md:normal-case">
        <Link className="nav-link" to="/" activeClassName="nav-link-active">
          Blog
        </Link>
        <Link
          className="nav-link"
          to="/about"
          activeClassName="nav-link-active"
        >
          About
        </Link>
        <Link
          className="nav-link"
          to="/contact"
          activeClassName="nav-link-active"
        >
          Contact
        </Link>
      </nav>
    </div>
    <svg
      className="absolute top-0 right-0 w-1/3 md:w-1/6 text-primary"
      viewBox="-25 0 100 100"
    >
      <g transform="rotate(315)">
        <rect width="12%" height="450" className="fill-current"></rect>
      </g>
    </svg>
  </header>
)

export default Header
