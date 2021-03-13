import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { AboutContent } from '../pagesStyles/about.styles';

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <AboutContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Guilherme Teixeira. Sou{" "}
        <strong>desenvolvedor</strong> e{" "}
        <strong> graduando em linguística</strong>.
      </p>
      <p>
        Amo computadores, música, patins e basquete desde a infância; e adoro
        ler sobre <strong>linguística</strong> e <strong>ciência</strong>. Também gosto de ler ficção científica e ficção fantástica.
      </p>
      <p>
        Atualmente estou aprimorando meus conhecimentos em <strong>JavaScript</strong>, em especial
        <strong> ReactJS </strong> e <strong>GatsbyJS</strong> no meu trabalho como {" "}
        <strong>desenvolvedor front-end</strong>. 
      </p>
      <p>
        Na faculdade, meus interesses principais são a <strong>Sintaxe Gerativa</strong> (aka Sintaxe Chomskyana) e a
        <strong> Aquisição de Linguagem</strong>.
      </p>
    </AboutContent>
  </Layout>
)

export default About
