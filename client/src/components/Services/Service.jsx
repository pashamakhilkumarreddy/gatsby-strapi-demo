import React from "react"
import PropTypes from "prop-types"
import * as serviceStyles from "./service.module.scss"

const Service = ({ icon, title, description }) => {
  return (
    <div className="column is-full-mobile is-6-tablet is-4-desktop is-3-widescreen is-3-fullhd">
      <div className={`card ${serviceStyles.card}`}>
        <div className="card-content">
          <div className="content has-text-centered">
            <span>{icon}</span>
            <div className="is-flex is-flex-direction-column">
              <h3 className="title is-4 mt-3 mb-0">{title}</h3>
              <div className="underline"></div>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Service.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Service
