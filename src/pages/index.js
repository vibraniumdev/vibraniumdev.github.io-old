import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <LandingBio />
      <Hero />
    </Layout>
  )
}

export default IndexPage
