import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TextCollapse from "../components/text-collapse"
import BulletList from "../components/bullet-list"
import * as S from "../pagesStyles/about.styles"

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

const About = () => {
  return (
    <Layout>
      <Seo
        title="About"
        keywords={[`javascript`, `programming`, `react`, `linguistics`]}
      />
      <S.AboutContent>
        <S.GraySubTitle>Who I Am</S.GraySubTitle>

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
      </S.AboutContent>
    </Layout>
  )
}

export default About
