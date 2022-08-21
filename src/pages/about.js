import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TextCollapse from "../components/text-collapse"
import BulletList from "../components/bullet-list"
import { softwareList, gearList } from "../content/aboutLists"

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
        <TextCollapse title="Short Bio">
          <p>
            {" "}
            I am Front-End Developer currently focused on building ReactJS and
            NextJS applications.{" "}
          </p>
        </TextCollapse>
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
          <ul>
            <li>
              I'm a keyboard person. I use keyboard shortcuts for pretty
              everything in my workflow, including browsing the web
            </li>
            <li>
              I am a touch typist, averaging +70 WPM{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.keybr.com/profile/y450zlb"
              >
                according to keybr
              </a>
            </li>
            <li>
              I am a proud Linux user since 2011. In 2018 I bought a MacBook,
              and since then I switch between Arch Linux, macOS and Linux Mint.
              You can check out more details about that journey{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                to="https://dev.to/guiteixeira/minha-historia-no-linux-17e8"
              >
                by reading this article written in 2018
              </a>
            </li>
          </ul>
        </TextCollapse>

        <TextCollapse title="Music-Related">
          <ul>
            <li>
              {" "}
              My favorite artists are Dream Theater, Angra, Oficina G3, and
              Kendrick Lamar{" "}
            </li>
            <li>
              {" "}
              My favorite musical genres are Progressive Metal — and its
              subgenres — and rap. But I listen to any kind of music, though.
              Really.{" "}
            </li>

            <li>
              {" "}
              I can play decently more than 10 different musical instruments.
            </li>
          </ul>
        </TextCollapse>

        <TextCollapse title="Fitness/Sports">
          <ul>
            <li> I ride my bike every day, religiously </li>
            <li>
              {" "}
              I also like rollerblading and basketball, and someday I will try
              snowboard{" "}
            </li>
          </ul>
        </TextCollapse>

        <TextCollapse title="Nerdy/Geeky Facts">
          <ul>
            <li>
              When I was a kid I was capable of read/write/pronounce words — and
              even sentences — backwards. Turned out to be such an useless
              skill.
            </li>
            <li>
              When I was a kid, my favorite books were the Listel's Phone
              Directory (better known as the "Páginas Amarelas"), the Brazilian
              Portuguese dictionary, and the English-Portuguese dictionary
            </li>
            <li>
              {" "}
              According to my mom, I taught myself to read before completing 4
              years of age{" "}
            </li>
            <li> I'm also a self-taught english speaker </li>
            <li> My favorite videogames are the Metal Gear series </li>
            <li>
              I used to be an Android enthusiast from 2010 to 2020, when I
              switched to iOS just for the sake of trying. I used custom ROMs in
              almost all devices I owned during all that time. After giving iOS
              a try, I realized that the iPhone made me become a person person
              who pays less attention to — and spends less time with — the
              smartphone, which was the main goal. It's been a relief since
              then.
            </li>
          </ul>
        </TextCollapse>

        <TextCollapse title="Other Facts">
          <ul>
            <li> I'm left-handed </li>
            <li> I'm agnostic/atheist </li>
            <li>
              {" "}
              I'm digital minimalist and a low-profile individual on the
              internet{" "}
            </li>
            <li>
              {" "}
              I'm always craving for ways to improve both my productivity and my
              privacy/security, and that influences all the choices I make when
              it comes to the software and hardware I use{" "}
            </li>
            <li>
              {" "}
              Even though I love to read, currently I stick to articles and
              papers instead of books most of the time. That started to happen
              after I joined the college. It seems like it's a common for
              undergraduate students to lose their interest — or simply their
              habit — or reading books.{" "}
            </li>
            <li>
              Usually I don't watch movies and TV series. There are a few
              exceptions listed{" "}
              <a
                href="https://www.tvtime.com/en/user/62634214/profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                here in TV Time
              </a>
            </li>
            <li>
              I love writing just for the pleasure of it. I have tons of
              unfinished random essays, articles, the british writer texts,
              poems. Some of them are already published, some are going to be
              when I finish building my Digital Garden
            </li>
            <li>
              I'm not much into literature, but my favorite writers are:
              <ul>
                <li>João Guimarães Rosa (favorite brazilian writer)</li>
                <li>Fernando Pessoa (favorite poet)</li>
                <li>J.R.R. Tolkien (the writer who rules them all)</li>
              </ul>
            </li>
          </ul>
        </TextCollapse>

        <br />
        <br />
        <h2>What I Use</h2>
        <TextCollapse startsExpanded title="Gear">
          <BulletList topicList={gearList} />
        </TextCollapse>

        <TextCollapse title="Software">
          <BulletList topicList={softwareList} />
        </TextCollapse>

        <br />
        <br />

        <h2>What I Study</h2>
        <TextCollapse title="Linguistics">
          <ul>
            <li>
              I study Linguistics (undergraduate bachelor) at UFSCar, the
              Federal University of São Carlos, one of the most important
              universities in Brazil
            </li>
            <li>
              {" "}
              As a student, my topics of interest are theoretical linguistics,
              mainly Generative Syntax, Formal Semantics, Epistemology, Analytic
              Philosophy, and Language Acquisition{" "}
            </li>
            <li>
              {" "}
              The COVID pandemics messed up with everyone's plans, including
              mine. My current status is 99% linguist because the only thing
              left for me to accomplish within college is to finish writing the
              final paper required to obtain my degree{" "}
            </li>{" "}
            <li>
              Even though I love linguistics, and though I'm about to become a
              linguist, that field of study doesn't suits me anymore{" "}
            </li>
          </ul>
          <h2>Other Links</h2>
        </TextCollapse>
        <br />

        <TextCollapse title="Other Links">
          <ul>
            <li>
              <a
                href="https://www.strava.com/athletes/73219146"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Strava{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.keybr.com/profile/y450zlb"
                target="_blank"
                rel="noopener noreferrer"
              >
                keybr.com
              </a>
            </li>
            <li>
              <a
                href="https://www.tvtime.com/en/user/62634214/profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                TV Time
              </a>
            </li>
          </ul>
        </TextCollapse>
      </S.AboutContent>
    </Layout>
  )
}

export default About
