import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Eu sou uma página de about</h1>
    <p>Isto é um texto na página de about</p>
  </Layout>
)

export default About
