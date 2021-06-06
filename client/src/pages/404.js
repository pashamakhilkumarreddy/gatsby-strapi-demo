import { Link } from "gatsby"
import React from "react"
import MainLayout from "../layouts/MainLayout/MainLayout"

const PageNotFound = () => {
  return (
    <MainLayout>
      <div className="columns is-centered is-vcentered is-mobile">
        <div className="column is-12-mobile has-text-centered">
          <h2 className="title is-2">Page Not Found</h2>
          <Link to="/" className="button is-info is-light is-medium">
            {`-> Go to home`}
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default PageNotFound
