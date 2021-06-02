import React from "react"
import PropTypes from "prop-types"

const Title = ({ title = "Title", containerClass = "", titleClass = "" }) => {
  return (
    <div
      className={`is-flex is-flex-direction-column has-text-centered ${containerClass}`}
    >
      <h2 className={`title mb-0 ${titleClass ? titleClass : "is-2"}`}>
        {title}
      </h2>
      <div className="underline"></div>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  containerClass: PropTypes.string,
  titleClass: PropTypes.string,
}

export default Title
