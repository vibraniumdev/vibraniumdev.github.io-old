import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitch,
  faGoodreads,
  faStrava,
  faLastfm,
  faBluesky,
} from "@fortawesome/free-brands-svg-icons"
import { faBrain, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import * as S from "./hero.styles"
import { Tooltip } from "@mui/material"

const heroList = [
  {
    href: "https://www.strava.com/athletes/guiatf",
    icon: faStrava,
    name: "Strava",
  },
  {
    href: "https://bsky.app/profile/guiteixeira.dev",
    icon: faBluesky,
    name: "Bluesky",
  },
  {
    href: "https://www.linkedin.com/in/guiatf",
    icon: faLinkedin,
    name: "LinkedIn",
  },
  {
    href: "https://github.com/ggteixeira/",
    icon: faGithub,
    name: "GitHub",
  },
  {
    href: "https://github.com/divertimentos/",
    icon: faBrain,
    name: "Divertimentos",
  },
  {
    href: "https://www.goodreads.com/guiemi",
    icon: faGoodreads,
    name: "Goodreads",
  },
  {
    href: "https://www.twitch.tv/guilhermestreams/",
    icon: faTwitch,
    name: "Twitch",
  },
  {
    href: "https://www.last.fm/user/guirgo",
    icon: faLastfm,
    name: "Last.fm",
  },
  {
    href: "mailto:hello@guiteixeira.dev",
    icon: faEnvelope,
    name: "E-mail",
  },
]

const Hero = () => {
  return (
    <S.Container>
      {heroList.map((item) => {
        return (
          <Tooltip placement="bottom" title={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={`${item.icon}-${Math.floor(Math.random() * 42)}`}
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </Tooltip>
        )
      })}
    </S.Container>
  )
}

export default Hero
