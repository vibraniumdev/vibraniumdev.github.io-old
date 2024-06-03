import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TextCollapse from "../components/text-collapse"
import BulletList from "../components/bullet-list"

import {
  softwareList,
  gearList,
  studyLinguisticsList,
  codingRelatedList,
  musicRelatedList,
  fitnessAndSportsList,
  nerdyAndGeekyFactsList,
  otherFactsList,
} from "../content/aboutLists"

import * as S from "../pagesStyles/about.styles"
import { Typography } from "@mui/material"
const About = () => {
  const YOE = new Date().getFullYear() - 2018 - 1
  const frontendYOE = new Date().getFullYear() - 2020 - 1

  return (
    <Layout>
      <Seo
        title="About"
        keywords={[
          `javascript`,
          `programming`,
          `react`,
          `linguistics`,
          `frontend`,
        ]}
      />
      <S.AboutContent>
        <S.TitleContainer>
          {/* WHO I AM */}
          <S.GraySubTitle>Who I Am</S.GraySubTitle>
          <Typography>
            I am a software developer based in Brazil, and I have been working
            in the tech industry for about {YOE} years, {frontendYOE} of which
            as a front-end developer. My ultimate goal is to improve people's
            lives through technology — and to try to make the World a better
            place using the resources we have at hand right now.
          </Typography>
          <br />
          <Typography>
            Before working with front-end development, I have worked with
            Python/Django. After that, I did an internship working with Natural
            Language Processing and Machine Learning using Python again, this
            time with spaCy.
          </Typography>
          <br />
          <Typography>
            Even though I can consider myself a front-end specialist nowadays,
            my interests are far from being restricted to interfaces and user
            experience. Actually, my next main goal is to learn Elixir and
            Functional Programming.
          </Typography>
        </S.TitleContainer>

        {/* WHAT I USE */}

        <S.TitleContainer>
          <S.GraySubTitle>What I Use</S.GraySubTitle>
        </S.TitleContainer>

        <TextCollapse title="Gear">
          <BulletList topicList={gearList} />
        </TextCollapse>
        <TextCollapse title="Software">
          <BulletList topicList={softwareList} />
        </TextCollapse>
        <br />

        {/* WHAT I AM STUDYING */}
        {/* <S.GraySubTitle>What I Am Studying</S.GraySubTitle> */}
        {/* <TextCollapse title="Linguistics"> */}
        {/*   <BulletList topicList={studyLinguisticsList} /> */}
        {/* </TextCollapse> */}
        {/* <br /> */}
        {/* <S.GraySubTitle>What Else</S.GraySubTitle> */}
        {/* <TextCollapse title="Other Links"> */}
        {/*   <BulletList otherLinks topicList={otherLinks} /> */}
        {/* </TextCollapse> */}

        {/* MISCELLANEOUS */}
        <S.TitleContainer>
          <TextCollapse title="Coding-Related Facts">
            <BulletList topicList={codingRelatedList} />
          </TextCollapse>
          <TextCollapse title="Nerdy Facts">
            <BulletList topicList={nerdyAndGeekyFactsList} />
          </TextCollapse>
          <TextCollapse title="Musical Facts">
            <BulletList topicList={musicRelatedList} />
          </TextCollapse>

          {/* <TextCollapse title="Sports Facts"> */}
          {/*   <BulletList topicList={fitnessAndSportsList} /> */}
          {/* </TextCollapse> */}

          <TextCollapse title="Other Facts">
            <BulletList topicList={otherFactsList} />
          </TextCollapse>
          <br />
        </S.TitleContainer>
      </S.AboutContent>
    </Layout>
  )
}

export default About
