import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage as Image } from "gatsby-plugin-image"
import React from "react"
import MainLayout from "../layouts/MainLayout/MainLayout"
import Title from "../components/Title"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const {
    title,
    info,
    profile_img: {
      localFile: {
        childImageSharp: { gatsbyImageData },
      },
    },
    tags,
  } = nodes[0]
  return (
    <MainLayout title="About" description="About">
      <div className="columns is-centered is-vcentered is-mobile mt-4 is-multiline">
        <div className="column is-11-mobile is-11-tablet is-6-desktop is-5-widescreen is-5-fullhd">
          <Image image={gatsbyImageData} alt="About" className="about-image" />
        </div>
        <div className="column is-11-mobile is-11-tablet is-6-desktop is-5-widescreen is-5-fullhd">
          <Title title={title} />
          <div className="content subtitle mt-4">{info}</div>
          <div className="tags mt-6">
            {tags.map(({ id, title }) => (
              <span key={id} className="tag is-link is-medium">
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

About.propTypes = {
  nodes: PropTypes.any,
}

export const query = graphql`
  query {
    allStrapiAbout {
      nodes {
        title
        info
        profile_img {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
        }
        tags {
          id
          title
        }
      }
    }
  }
`

export default About
