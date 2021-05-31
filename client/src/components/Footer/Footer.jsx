import React, { memo } from "react"
import * as footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="content has-text-centered">
        <p className="title title is-4">&copy; 2021 React Strapi Demo</p>
      </div>
    </footer>
  )
}

export default memo(Footer)
