import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as S from '../components/layout.styles'

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <S.Content>
      <h1>Eu sou uma página de about</h1>
      <p>Hello, my name is Guilherme. I'm a Computational Linguistics intern, a developer, and a linguistics undergraduate student based in São Carlos, Brazil.</p>
      <p>I love computers and inline-skating since the childhood; and I love to read about linguistics and science in general. I love to read science fiction, and fantasy literature too. I also enjoy watching NBA on TV in the spare time.</p>
      <p>I'm currently improving my Python and NLP skills in my actual internship as a computational linguist. I'm also studying JavaScript and Vue.js. My main goal in the college is to develop research on Generative Grammar (a.k.a. Chomskyan Syntax) and Formal Semantics. I hope to know a bit more about Machine Learning as well as Formal Syntax in the near future.</p>
    </S.Content>


  </Layout>
)

export default About
