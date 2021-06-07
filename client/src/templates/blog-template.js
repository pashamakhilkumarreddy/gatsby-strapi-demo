import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import ReactMarkDown from "react-markdown"
import MainLayout from "../layouts/MainLayout"
import "./blog-template.scss"

const BlogTemplate = ({ data: { blog } }) => {
  const { content, title, description } = blog
  return (
    <MainLayout title={title} description={description}>
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-full-mobile is-8-tablet is-6-desktop is-6-widescreen is-6-fullhd">
          <article className="blog-content">
            <ReactMarkDown>{content}</ReactMarkDown>
          </article>
        </div>
      </div>
    </MainLayout>
  )
}

BlogTemplate.propTypes = {
  blog: PropTypes.object,
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default BlogTemplate
