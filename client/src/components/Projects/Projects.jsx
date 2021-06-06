import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Project from "./Project"
import Title from "../Title"

const Projects = ({ projects, title = "", showLink = false }) => {
  return (
    <>
      <Title title={title} />
      {projects.map((project, i) => (
        <div
          key={project.id}
          className="columns is-centered is-vcentered is-mobile is-multiline"
        >
          <Project index={i} {...project} />
        </div>
      ))}
      {showLink ? (
        <div className="columns is-centered is-vcentered is-mobile">
          <div className="column is-full-mobile has-text-centered">
            <Link to="/projects" className="button is-info is-medium">
              Projects
            </Link>
          </div>
        </div>
      ) : null}
    </>
  )
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(Object),
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool,
}

export default Projects
