import { graphql, Link, useStaticQuery } from "gatsby"
import React, { memo } from "react"
import Image from "gatsby-image"
import SocialLinks from "../SocialLinks"
import * as heroStyles from "./hero.module.scss"

const Hero = () => {
  const query = graphql`
    query {
      file(name: { eq: "Goku_Ultra_Instinct" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <section className="hero is-fullheight">
      <div className="hero-body p-0">
        <div className="container p-6 is-relative">
          <div className="columns is-justify-content-left is-vcentered is-mobile">
            <div
              className={`column is-full-mobile is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd ${heroStyles.column__backgroundWhite}`}
            >
              <h2 className="title is-2">I'm Akhil</h2>
              <h5 className="subtitle is-5 pt-2">Full Stack Cloud Engineer</h5>
              <Link to="/contact" className="button is-primary is-uppercase">
                <span className={heroStyles.contactText}>Contact me</span>
              </Link>
              <SocialLinks />
            </div>
          </div>
        </div>
        <Image
          fluid={fluid}
          className="img__width--full is-absolute"
          style={{ zIndex: -1 }}
        />
      </div>
    </section>
  )
}

export default memo(Hero)
