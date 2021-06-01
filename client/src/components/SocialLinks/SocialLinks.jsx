import React, { memo } from "react"
import PropTypes from "prop-types"
import socialData from "../../constants/socialLinks"

const Links = () => {
  return socialData.map(link => (
    <li key={link.id} className="mr-4">
      <a
        href={link.url}
        className="social-link"
        rel="noopener noreferrer"
        target="_blank"
      >
        {link.icon}
      </a>
    </li>
  ))
}

const SocialLinks = ({ socialLinksClass }) => {
  return (
    <ul
      className={`is-flex is-align-content-center is-justify-content-flex-start social-links mt-4 ${
        socialLinksClass ? socialLinksClass : ""
      }`}
    >
      <Links />
    </ul>
  )
}

SocialLinks.propTypes = {
  socialLinksClass: PropTypes.string,
}

export default memo(SocialLinks)
