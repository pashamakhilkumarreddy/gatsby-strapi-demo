import React, { memo, useState } from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"

const Header = () => {
  const [display, setDisplay] = useState(false)
  return (
    <header className={headerStyles.header}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="/" loading="lazy" decoding="async" alt="Logo" />
          </Link>
          <span // eslint-disable-line jsx-a11y/click-events-have-key-events
            role="button"
            className={`navbar-burger ${display ? "is-active" : ""}`}
            data-target="mainNavbar"
            onClick={() => setDisplay(display => !display)}
            tabIndex={0}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div
          className={`navbar-menu ${display ? "is-active" : "pr-3"}`}
          id="mainNavbar"
        >
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
            <Link to="/projects" className="navbar-item">
              Projects
            </Link>
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
            <Link to="/contact" className="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default memo(Header)
