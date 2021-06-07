import { graphql } from "gatsby"
import PropTypes, { object } from "prop-types"
import React from "react"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Articles from "../components/Articles"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: articles = [] },
  },
}) => {
  return (
    <MainLayout title="Blog" description="Blog">
      <Articles title="Articles" articles={articles} />
    </MainLayout>
  )
}

Blog.propTypes = {
  articles: PropTypes.arrayOf(object),
}

export const query = graphql`
  query {
    allStrapiBlogs {
      nodes {
        id
        strapiId
        title
        slug
        content
        description
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
        date
        tags {
          id
          title
        }
      }
    }
  }
`

export default Blog
