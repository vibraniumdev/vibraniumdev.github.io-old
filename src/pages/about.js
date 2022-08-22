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
  otherLinks,
} from "../content/aboutLists"

import * as S from "../pagesStyles/about.styles"
const About = () => {
  return (
    <Layout>
      <Seo
        title="About"
        keywords={[`javascript`, `programming`, `react`, `linguistics`]}
      />
      <S.AboutContent>
        <h1>About Me</h1>
        <h2>Who I Am</h2>
        <TextCollapse title="Backstory">
          <p>
            I've made my first steps into programming back in 2007, when I
            learned to build my first websites using HTML and CSS. But it was
            only in 2016 when I decided to study nonstop until I could call
            myself a programmer. I started learning Python, R, and Prolog in the
            college. Less than one year later, I was already doing undergraduate
            research on Natural Language Processing and Machine Learning, using
            mainly Python.
          </p>

          <p>
            One year later, instead of search for jobs within my main area of
            expertise (i.e. Linguistics), I took the harder path and got my
            first job as a developer: a Python Software Development Internship,
            more than 200km away from my college, in a financial market company
            named Vert Capital.{" "}
          </p>
          <p>
            I spent one year working and living in São Paulo city. I worked with
            amazing devs, learned a lot of new things — both code-related and
            industry-related —, met the amazing dev community in there, attended
            to talks, courses, conferences, and more. Some of them you can
            checkout here{" "}
            <a
              href="https://github.com/divertimentos/notes"
              target="_blank"
              rel="noopener noreferrer"
            >
              in my public personal notes' repository.
            </a>{" "}
            After that long year, I decided that it was the time to move back to
            São Carlos in order to finish my degree, and take the next important
            step in my career: to become a junior developer.
          </p>
          <p>
            After sending 30 CVs and being interviewed by 18 companies in three
            different cities, I received job offers from three of them. Decent
            ratio.
          </p>
          <ol>
            <li>
              The first job, Junior Python Developer in a company that was
              offering less than my monthly expenses at the time;
            </li>
            <li>
              the second, a decent-paying Fullstack React/Python job in a
              company needing a Python developer with both front-end and
              linguistics background. It was the perfect role for me. I accepted
              the offer with no time;
            </li>
            <li>
              But the third was a job as a Computational Linguist intern.{" "}
            </li>
          </ol>
          <p>
            Even though I already knew that I wanted to work with code, I had to
            make a strategic decision: Linguist jobs are rare, and that one was
            a once-in-a-lifetime opportunity that was being given to me, to not
            only work with the subject I studied fiercely for years, but to work
            alongside some of the best computational linguists out there. So I
            changed my mind in the last minute, and decided that I should
            postpone my career as a developer for exactly one year. No less, no
            more. And so it went.
          </p>
          <p>
            I can talk for hours about how Linguistics is one of the most
            interesting and intriguing sciences we've ever created, I can assure
            you. But let me be honest, that year taught me that I was 100% right
            when I decided to switch from a theoretical linguist to a dev,
            because that job simply wasn't for me.
          </p>
          <p>
            Lesson learned, it was time to become a software engineer for good.
            The wait didn't take long, fortunately. In August 2020, after
            completing 1 year at Redação Nota 1000, I joined Printi as a Junior
            Front-End Developer. I work there since then.
          </p>
          <p>
            Printi is one of the biggest online printing companies in Latin
            America. We dozens of talented people working from three different
            continents.
          </p>
          <p>
            Every day they give me the opportunity to improve my knowledge about
            front-end, and software engineering in general, as well as my
            english skills, teamwork, leadership, organisation, productivity,
            decision-making, autonomy, and much, much more.
          </p>
        </TextCollapse>

        <TextCollapse title="Coding-Related">
          <BulletList topicList={codingRelatedList} />
        </TextCollapse>

        <TextCollapse title="Music-Related">
          <BulletList topicList={musicRelatedList} />
        </TextCollapse>

        <TextCollapse title="Fitness/Sports">
          <BulletList topicList={fitnessAndSportsList} />
        </TextCollapse>

        <TextCollapse title="Nerdy/Geeky Facts">
          <BulletList topicList={nerdyAndGeekyFactsList} />
        </TextCollapse>

        <TextCollapse title="Other Facts">
          <BulletList topicList={otherFactsList} />
        </TextCollapse>

        <br />
        <br />
        <h2>What I Use</h2>
        <TextCollapse title="Gear">
          <BulletList topicList={gearList} />
        </TextCollapse>

        <TextCollapse title="Software">
          <BulletList topicList={softwareList} />
        </TextCollapse>

        <br />
        <br />

        <h2>What I Study</h2>
        <TextCollapse title="Linguistics">
          <BulletList topicList={studyLinguisticsList} />
        </TextCollapse>
        <br />

        <h2>What else</h2>
        <TextCollapse startsExpanded title="Other Links">
          <BulletList topicList={otherLinks} />
        </TextCollapse>
      </S.AboutContent>
    </Layout>
  )
}

export default About
