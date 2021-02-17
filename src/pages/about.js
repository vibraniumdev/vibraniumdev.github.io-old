import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        Hello, my name is Guilherme Teixeira. I'm a software developer, and a
        linguistics undergraduate student based in São Carlos, Brazil.
      </p>
      <p>
        I love computers and inline-skating since the childhood; and I love to
        read about linguistics and science in general. I love to read science
        fiction, and fantasy literature too. I also enjoy watching NBA.
      </p>
      <p>
        I'm currently improving my JavaScript and React skills in my job as a
        front-end developer. In the college, my main goal is to develop research
        on Generative Grammar (aka Chomskyan Syntax) and Language Acquisition.
      </p>
    </AboutContent>
  </Layout>
)

export default About
