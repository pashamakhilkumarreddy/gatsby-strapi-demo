import React from "react"
import { Helmet } from "react-helmet-async"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const Head = ({ title = "Home" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const {
    site: { siteMetadata },
  } = data
  return (
    <Helmet>
      <title>{`${siteMetadata.title} | ${title}`}</title>
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string,
}

export default Head
