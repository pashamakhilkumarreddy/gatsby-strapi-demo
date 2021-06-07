import React from "react"
import { Helmet } from "react-helmet-async"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const Head = ({ title = "Home", description = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          twitterImage
          siteUrl
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: {
        title: siteTitle,
        description: siteDescription,
        twitterUsername,
        twitterImage,
        siteUrl,
      },
    },
  } = data
  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      <title>{`${siteTitle} | ${title}`}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={twitterImage} />
      {/* Twitter */}
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={`${siteTitle} | ${title}`} />
      <meta
        name="twitter:description"
        content={description || siteDescription}
      />
      <meta name="twitter:image" content={`${siteUrl}${twitterImage}`} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Facebook */}
      <meta property="og:title" content={`${siteTitle} | ${title}`} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content={`${siteUrl}${twitterImage}`} />
      <meta property="og:url" content={siteUrl} />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Head
