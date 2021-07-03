import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { AboutContent } from "../pagesStyles/about.styles"

const About = () => (
  <Layout>
    <SEO
      title="About"
      keywords={[`javascript`, `programming`, `react`, `linguistics`]}
    />
    <AboutContent>
      <h1>About me</h1>
      <p>
        Hello! My name is Guilherme Teixeira. I'm a front-end developer, and an
        undergraduate Linguistics student.
      </p>
      <p>
        I love computers, progressive metal, rollerblades, and NBA since the
        childhood. I also enjoy reading about science fiction, fantasy, and
        philosophy. When I grew older, I've found out that I also love science and grammar, so I decided to join a bachelor degree called Linguistics, which is the one that has language as its main scientific object of study.
      </p>
      <p>
        Although my tech career began almost 10 years ago, I've made my first
        steps into software development in 2017 when I started learning Python
        in the college. One year later, I was already working as a Python
        software development intern. Later I took the oportunity to work as a
        computational linguist (NLP) intern. In 2020, I accepted the challenge
        of starting over.
      </p>
      <p>
        Currently I work as a front-end developer at the biggest online printing
        company in Brazil. I'm constantly improving my knowledge about HTML,
        CSS, and JavaScript, as well as ReactJS, NextJS and GatsbyJS.
      </p>
      <p>
        As a college student, my topics of interest are theoretical linguistics,
        mainly Generative Syntax, Formal Semantics, Epistemology, Philosophy of
        Language (Analytic Philosophy), and Language Acquisition.
      </p>
    </AboutContent>
  </Layout>
)

export default About
