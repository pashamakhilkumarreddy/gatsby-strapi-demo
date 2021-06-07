import React from "react"
import PropTypes, { object } from "prop-types"
import Article from "./Article"
import Title from "../Title"
import { Link } from "gatsby"

const Articles = ({ articles = [], title = "", showLink = false }) => {
  return (
    <>
      <Title title={title} />
      <div className="columns is-centered is-vcentered is-mobile is-multiline is-justify-content-space-around">
        {articles.map(article => (
          <Article key={article.id} {...article} />
        ))}
      </div>
      {showLink ? (
        <div className="columns is-centered is-vcentered is-mobile">
          <div className="column is-full-mobile has-text-centered">
            <Link to="/blog" className="button is-info is-medium">
              Blog
            </Link>
          </div>
        </div>
      ) : null}
    </>
  )
}

Articles.propTypes = {
  title: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(object),
  showLink: PropTypes.bool,
}

export default Articles
