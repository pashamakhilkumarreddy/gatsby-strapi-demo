import React from "react"
import PropTypes from "prop-types"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "../../assets/styles/scss/main.scss"
import Head from "../../components/Head"

const MainLayout = ({ children }) => {
  return [
    <Head key="head" />,
    <Header key="header" />,
    <main className="container mt-4" key="main">
      {children}
    </main>,
    <Footer key="footer" />,
  ]
}

MainLayout.propTypes = {
  children: PropTypes.any,
}

export default MainLayout
