import React from "react"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Projects from "../components/Projects"
import { graphql } from "gatsby"

const AllProjects = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <MainLayout>
      <Projects title="All Projects" projects={projects} showLink={false} />
    </MainLayout>
  )
}

export const query = graphql`
  query {
    allStrapiProjects(sort: { fields: strapiId, order: ASC }) {
      nodes {
        id
        strapiId
        title
        description
        featured
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        github
        url
        tags {
          id
          title
        }
      }
    }
  }
`

export default AllProjects
