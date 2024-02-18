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
          <S.GraySubTitle>Who I Am</S.GraySubTitle>
          <Typography>
            I am a software developer based in Brazil, and I have been working
            in the tech industry for about {YOE} years, {frontendYOE} of which
            as a front-end developer. My ultimate goal is to improve people's
            lives around the globe through technology — and to try to make the
            World a better place using the resources we have at hand right now
          </Typography>
        </S.TitleContainer>
        <S.TitleContainer>
          <TextCollapse title="Coding-Related Facts">
            <BulletList topicList={codingRelatedList} />
          </TextCollapse>
          <TextCollapse title="Nerdy Facts">
            <BulletList topicList={nerdyAndGeekyFactsList} />
          </TextCollapse>
          <TextCollapse title="Music Facts">
            <BulletList topicList={musicRelatedList} />
          </TextCollapse>
          <TextCollapse title="Sports Facts">
            <BulletList topicList={fitnessAndSportsList} />
          </TextCollapse>
          <TextCollapse title="Other Facts">
            <BulletList topicList={otherFactsList} />
          </TextCollapse>
          <br />
          <br />
          <S.GraySubTitle>What I Use</S.GraySubTitle>
          <TextCollapse title="Gear">
            <BulletList topicList={gearList} />
          </TextCollapse>
          <TextCollapse title="Software">
            <BulletList topicList={softwareList} />
          </TextCollapse>
          <br />
          <br />
          <S.GraySubTitle>What I Study</S.GraySubTitle>
          <TextCollapse title="Linguistics">
            <BulletList topicList={studyLinguisticsList} />
          </TextCollapse>
          <br />
          {/* <S.GraySubTitle>What Else</S.GraySubTitle> */}
          {/* <TextCollapse title="Other Links"> */}
          {/*   <BulletList otherLinks topicList={otherLinks} /> */}
          {/* </TextCollapse> */}
        </S.TitleContainer>
      </S.AboutContent>
    </Layout>
  )
}

export default About
