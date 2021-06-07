import React, { memo } from "react"
import SocialLinks from "../SocialLinks"
import * as footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className="content is-flex is-align-items-center is-justify-content-center is-flex-direction-column has-text-centered">
        <p className="title title is-4 mb-2">
          &copy; 2021 React Strapi Demo. All Rights Reserved
        </p>
        <SocialLinks socialLinksClass={footerStyles.socialLinks} />
      </div>
    </footer>
  )
}

export default memo(Footer)
