import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { AboutContent } from "../pagesStyles/about.styles"

const About = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <AboutContent>
      <h1>About me</h1>
      <p>
        Meu nome é Guilherme Teixeira, desenvolvedor front-end e graduando em
        Linguística.
      </p>
      <p>
        Amo computadores, música, patins e basquete desde a infância; e adoro
        ler sobre linguística e ciência. Também gosto de ler ficção científica e
        ficção fantástica.
      </p>
      <p>
        Desde a infância sou fascinado por computadores, música, patins,
        snowboarding e basquete.
      </p>
      <p>
        Embora minha trajetória na tecnologia tenha se iniciado há quase 10
        anos, meus primeiros passos no desenvolvimento de software foram dados
        em 2017, quando comecei a aprender Python. Entre 2018 e 2019 trabalhei
        com Python como estagiário, até que tive a oportunidade de ingressar
        como estagiário em Linguística Computacional, para aliar meus
        conhecimentos de Python e NLP. Em 2020, decidi mudar de carreira e ir
        trabalhar com desenvolvimento Front-End. Atualmente, em meu trabalho
        como desenvolvedor, estou aprimorando meus
        conhecimentos sobre JavaScript, em especial em ReactJS, GatsbyJS e
        NextJS, além de obviamente HTML e CSS e seus derivados.
      </p>
      <p>
        Na universidade, meu principal interesse é a linguística teórica, sobretudo nos tópicos relacionados a Epistemologia e
        Filosofia Analítica, Sintaxe Gerativa, Semântica Formal e Aquisição de Linguagem.
      </p>
    </AboutContent>
  </Layout>
)

export default About
