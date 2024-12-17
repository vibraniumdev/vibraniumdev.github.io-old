import React from "react";

import BulletList from "../components/bullet-list";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TextCollapse from "../components/text-collapse";

import {
  codingRelatedList,
  gearList,
  musicRelatedList,
  nerdyAndGeekyFactsList,
  otherFactsList,
  softwareList,
} from "../content/aboutLists";

import { Typography } from "@mui/material";
import * as S from "../pagesStyles/about.styles";
const About = () => {
  const YOE = new Date().getFullYear() - 2018;
  const frontendYOE = new Date().getFullYear() - 2020;

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
        {/* WHO I AM */}
        <S.TitleContainer>
          <S.GraySubTitle>Who I Am</S.GraySubTitle>
          <Typography>
            Software Developer with {YOE} years of experience in the industry,{" "}
            {frontendYOE} of which working as a{" "}
            <strong>Front-End Developer</strong>. Besides Front-End Systems, I
            am also interested in Security & Privacy, Open-Source, and
            Functional Programming
          </Typography>

          <br />
        </S.TitleContainer>

        {/* WHAT I USE */}
        <S.TitleContainer>
          <S.GraySubTitle>What I Use</S.GraySubTitle>

          <TextCollapse title="Gear">
            <BulletList topicList={gearList} />
          </TextCollapse>
          <TextCollapse title="Software">
            <BulletList topicList={softwareList} />
          </TextCollapse>
          <br />
        </S.TitleContainer>

        {/* MISCELLANEOUS */}
        <S.TitleContainer>
          <S.GraySubTitle>Miscellaneous</S.GraySubTitle>
          <TextCollapse title="Coding-Related Facts">
            <BulletList topicList={codingRelatedList} />
          </TextCollapse>
          <TextCollapse title="Nerdy Facts">
            <BulletList topicList={nerdyAndGeekyFactsList} />
          </TextCollapse>
          <TextCollapse title="Musical Facts">
            <BulletList topicList={musicRelatedList} />
          </TextCollapse>

          <TextCollapse title="Other Facts">
            <BulletList topicList={otherFactsList} />
          </TextCollapse>
          <br />
        </S.TitleContainer>
      </S.AboutContent>
    </Layout>
  );
};

export default About;
