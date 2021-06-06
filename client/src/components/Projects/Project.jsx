import React from "react"
import { GatsbyImage as Image } from "gatsby-plugin-image"
import PropTypes, { object } from "prop-types"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import * as projectStyles from "./project.module.scss"

const Project = ({
  index,
  id,
  strapiId,
  title,
  description,
  featured,
  image: {
    localFile: {
      childImageSharp: { gatsbyImageData },
    },
  },
  github,
  url,
  tags,
}) => {
  return (
    <>
      <div
        className="column is-11-mobile is-11-tablet is-6-desktop is-6-widescreen is-6-fullhd
    is-flex is-justify-content-center"
      >
        <Image
          image={gatsbyImageData}
          alt={title}
          className={projectStyles.productImage}
        />
      </div>
      <div
        className="column is-11-mobile is-11-tablet is-6-desktop is-6-widescreen is-6-fullhd
    is-flex is-justify-content-center"
      >
        <div className="project-info card">
          <div className="card-content">
            <div className="content">
              <div className="project-number">0{index + 1}</div>
              <h3 className="title is-4 my-3">{title}</h3>
              <p className="project-description">{description}</p>
              <div className="project-tags tags">
                {tags.map(({ id, title }) => (
                  <span className="tag is-info is-medium is-clickable" key={id}>
                    {title}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {github ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon is-medium is-size-3 mr-3"
                  >
                    <FaGithubSquare />
                  </a>
                ) : null}

                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon is-medium is-size-3"
                  >
                    <FaShareSquare />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Project.propTypes = {
  index: PropTypes.number,
  id: PropTypes.string,
  strapiId: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  featured: PropTypes.bool,
  image: PropTypes.object,
  github: PropTypes.string,
  url: PropTypes.string,
  tags: PropTypes.arrayOf(object),
}

export default Project
