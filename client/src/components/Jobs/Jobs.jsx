import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaAngleDoubleRight } from "react-icons/fa"
import Title from "../Title"
import * as jobsStyles from "./jobs.module.scss"

const Jobs = () => {
  const query = graphql`
    {
      allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
        nodes {
          id
          strapiId
          company
          position
          date
          description {
            id
            name
          }
        }
      }
    }
  `
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(query)
  const [currentJobIndex, setCurrentJobIndex] = useState(0)
  const { company, position, date, description } = jobs[currentJobIndex]
  return (
    <>
      <Title title="Experience" />
      <div className="columns is-justify-content-space-between is-vcentered mt-4 is-multline">
        <div className="column is-12-mobile is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd">
          <div className="is-flex is-grouped is-flex-direction-column is-align-items-flex-start p-2">
            {jobs.map(({ company, id }, i) => (
              <button
                className={`button my-2 is-light ${
                  currentJobIndex === i
                    ? `${jobsStyles.activeCompany} is-link`
                    : ""
                }`}
                key={id}
                onClick={() => setCurrentJobIndex(i)}
              >
                {company}
              </button>
            ))}
          </div>
        </div>
        <div className="column is-12-mobile is-6-tablet is-8-desktop is-8-widescreen is-8-fullhd">
          <article className="card m-2">
            <header className="card-header">
              <h2 className="card-header-title">{company}</h2>
            </header>
            <div className="card-content">
              <div className="content">
                <h3 className="position">{position}</h3>
                <time dateTime={date}>{date}</time>
                <ul className="m-0 mt-2" style={{ listStyle: "none" }}>
                  {description.map(({ id, name }) => (
                    <li key={id} className="is-flex is-align-items-center">
                      <span className="mr-2 icon is-large has-text-success">
                        <FaAngleDoubleRight className="is-size-4" />
                      </span>
                      <p className="subtitle is-6">{name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="columns is-centered is-vcentered">
        <div className="column is-12-mobile has-text-centered">
          <Link to="/" className="button is-info is-medium">
            More info
          </Link>
        </div>
      </div>
    </>
  )
}

export default Jobs
