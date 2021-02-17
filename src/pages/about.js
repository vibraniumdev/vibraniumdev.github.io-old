import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as S from "./about.styles"

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <S.AboutContent>
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
    </S.AboutContent>
  </Layout>
)

export default About
