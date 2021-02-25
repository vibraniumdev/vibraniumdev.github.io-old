import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import styled from "@emotion/styled"

export const AboutContent = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <AboutContent>
      <h1>About</h1>
      <p>
        Hello, my name is Guilherme Teixeira. I'm a{" "}
        <strong>software developer</strong>, and a
        <strong> linguistics undergraduate student</strong> based in São Carlos,
        Brazil.
      </p>
      <p>
        I love computers, music, inline-skating, and basketball since I was a
        kid; and I love to read about <strong>linguistics</strong> and{" "}
        <strong>science</strong>. I love to read science fiction, and fantasy
        literature too. I also enjoy watching NBA.
      </p>
      <p>
        I'm currently improving my <strong>JavaScript</strong> and
        <strong> ReactJS </strong> skills at my job as a{" "}
        <strong>front-end developer</strong>. In the college, my main goal is to
        develop research on <strong>Generative Grammar</strong> (aka Chomskyan
        Syntax) and
        <strong> Language Acquisition</strong>.
      </p>
    </AboutContent>
  </Layout>
)

export default About
