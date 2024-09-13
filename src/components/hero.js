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

const heroList = [
  {
    href: "https://bsky.app/profile/guiteixeira.dev",
    icon: faBluesky,
  },
  {
    href: "https://www.linkedin.com/in/guiatf",
    icon: faLinkedin,
  },
  {
    href: "https://github.com/ggteixeira/",
    icon: faGithub,
  },
  {
    href: "https://github.com/divertimentos/",
    icon: faBrain,
  },
  {
    href: "https://www.goodreads.com/guiemi",
    icon: faGoodreads,
  },
  {
    href: "https://www.twitch.tv/guilhermestreams/",
    icon: faTwitch,
  },
  {
    href: "https://www.strava.com/athletes/guiatf",
    icon: faStrava,
  },
  {
    href: "https://www.last.fm/user/guirgo",
    icon: faLastfm,
  },
  {
    href: "mailto:hello@guiteixeira.dev",
    icon: faEnvelope,
  },
]

const Hero = () => {
  return (
    <S.Container>
      {heroList.map((item) => {
        return (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            key={`${item.icon}-${Math.floor(Math.random() * 42)}`}
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        )
      })}
    </S.Container>
  )
}

export default Hero
