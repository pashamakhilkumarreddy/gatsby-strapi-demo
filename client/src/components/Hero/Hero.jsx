import { graphql, Link, useStaticQuery } from "gatsby"
import React, { memo } from "react"
import { GatsbyImage as Image } from "gatsby-plugin-image"
import SocialLinks from "../SocialLinks"
import * as heroStyles from "./hero.module.scss"

const Hero = () => {
  const query = graphql`
    query {
      file(name: { eq: "Goku_Ultra_Instinct" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(query)
  return (
    <div
      className={`columns is-centered is-vcentered is-mobile is-align-items-flex-start ${heroStyles.heroContainer}`}
    >
      <div className="column is-full-mobile is-12-tablet is-12-desktop is-12-widescreen is-12-fullhd">
        <section className="hero">
          <div className="hero-body p-0 is-relative">
            <div className="container p-6">
              <div className="columns is-justify-content-left is-vcentered is-mobile">
                <div
                  className={`column is-full-mobile is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd ${heroStyles.column__backgroundWhite}`}
                >
                  <h2 className="title is-2">I'm Akhil</h2>
                  <h5 className="subtitle is-5 pt-2">
                    Full Stack Cloud Engineer
                  </h5>
                  <Link
                    to="/contact"
                    className="button is-primary is-uppercase"
                  >
                    <span className={heroStyles.contactText}>Contact me</span>
                  </Link>
                  <SocialLinks />
                </div>
              </div>
            </div>
            <Image
              image={gatsbyImageData}
              className="img__width--full is-absolute"
              alt={`Goku_Ultra_Instinct`}
              style={{ zIndex: -1, top: 0 }}
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default memo(Hero)
