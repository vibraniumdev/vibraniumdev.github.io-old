import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { AboutContent } from "../pagesStyles/about.styles"

const About = () => (
  <Layout>
    <Seo
      title="About"
      keywords={[`javascript`, `programming`, `react`, `linguistics`]}
    />
    <AboutContent>
      <h1>About me</h1>
      <p>
        Hello! My name is Guilherme Teixeira. I'm a front-end developer and an
        undergraduate Linguistics student.
      </p>
      <p>
        I've made my first steps into software development in 2017 when I
        started learning Python in the college. Less than one year later, I was
        already working as a Python software development intern. After that I
        took the oportunity to work as a computational linguist (NLP) intern. In
        2020, I accepted the challenge of starting over.
      </p>
      <p>
        Currently I am a front-end developer at Printi, the biggest online
        printing company in Brazil. I'm constantly improving my knowledge about
        JavaScript, CSS, and HTML, as well as ReactJS, NextJS and GatsbyJS.
      </p>
      <p>
        As a college student, my topics of interest are theoretical linguistics,
        mainly Generative Syntax, Formal Semantics, Epistemology, Analytic
        Philosophy, and Language Acquisition.
      </p>
      <p>
        I love computers, Progressive Metal, rollerblades, and Basketball since
        I was a kid. I also enjoy reading about science fiction, fantasy, and
        philosophy. When I grew older, I've found out that I also love science
        and grammar, so I decided to join a bachelor degree called Linguistics,
        which is the field of study that has language as its main scientific
        object.
      </p>
    </AboutContent>
  </Layout>
)

export default About
