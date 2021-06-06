import React from "react"
import MainLayout from "../layouts/MainLayout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects/Projects"
import { graphql } from "gatsby"

const Home = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="Featured Projects" showLink />
    </MainLayout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(
      sort: { fields: strapiId, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        strapiId
        title
        description
        featured
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
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

export default Home
