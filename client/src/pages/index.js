import React from "react"
import MainLayout from "../layouts/MainLayout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Jobs />
    </MainLayout>
  )
}

export default Home
