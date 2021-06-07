import React from "react"
import MainLayout from "../layouts/MainLayout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects/Projects"
import { graphql } from "gatsby"
import Articles from "../components/Articles"

const Home = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  const {
    allStrapiBlogs: { nodes: articles },
  } = data
  return (
    <MainLayout title="Home" description="Home">
      <Hero />
      <Services />
      <Jobs />
      {projects ? (
        <Projects projects={projects} title="Featured Projects" showLink />
      ) : null}
      {articles ? (
        <Articles articles={articles} title="Articles" showLink />
      ) : null}
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
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        strapiId
        title
        content
        description
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
        date(formatString: "MMMM Do, YYYY")
        tags {
          id
          title
        }
      }
    }
  }
`

export default Home
