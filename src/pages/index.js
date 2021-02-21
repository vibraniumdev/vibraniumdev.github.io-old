import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LandingBio />
    <Hero />
  </Layout>
)

export default IndexPage
