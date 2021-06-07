import React from "react"
import PropTypes, { object } from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage as Image } from "gatsby-plugin-image"
import * as articleStyles from "./article.module.scss"

const Article = ({
  id,
  strapiId,
  title = "",
  content,
  description,
  slug,
  image: {
    localFile: {
      childImageSharp: { gatsbyImageData },
    },
  },
  date,
  tags,
}) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="column is-11-mobile is-5-tablet is-5-desktop is-5-widescreen is-5-fullhd card mt-5 mb-3"
    >
      <div className="card-image">
        <figure className="image">
          <Image
            image={gatsbyImageData}
            alt={title}
            className={articleStyles.articleImage}
          />
        </figure>
      </div>
      <div className={`card-content ${articleStyles.articleContent}`}>
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>
        <div className="content">
          <time dateTime={date}>{date}</time>
          <div className="tags mt-3">
            {tags.map(({ id, title }) => (
              <span key={id} className="tag is-link is-medium">
                {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

Article.propTypes = {
  id: PropTypes.any,
  strapiId: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.any,
  description: PropTypes.string,
  date: PropTypes.any,
  image: PropTypes.object,
  slug: PropTypes.string,
  tags: PropTypes.arrayOf(object),
}

export default Article
