import React from "react"
import PropTypes from "prop-types"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
// import "../../assets/styles/scss/main.scss"
import Head from "../../components/Head"

const MainLayout = ({ children, title, description }) => {
  return [
    <Head key="head" title={title} description={description} />,
    <Header key="header" />,
    <main className="container mt-4" key="main">
      {children}
    </main>,
    <Footer key="footer" />,
  ]
}

MainLayout.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default MainLayout
