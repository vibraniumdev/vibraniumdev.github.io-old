import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faTwitch,
  faDev,
  faMastodon,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons"

import { faBrain } from "@fortawesome/free-solid-svg-icons"

import * as S from "./hero.styles"

const heroList = [
  {
    href: "https://github.com/ggteixeira/",
    icon: faGithub,
  },
  {
    href: "https://github.com/divertimentos/",
    icon: faBrain,
  },
  {
    href: "https://www.linkedin.com/in/guiatf",
    icon: faLinkedin,
  },
  {
    href: "https://dev.to/guiteixeira",
    icon: faDev,
  },
  {
    href: "https://mastodon.com.br/@gui",
    icon: faMastodon,
  },
  {
    href: "https://www.goodreads.com/guiemi",
    icon: faGoodreads,
  },
  {
    href: "https://www.twitch.tv/guilhermestreams/",
    icon: faTwitch,
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
            key={`${item.icon}-${Math.floor(Math.random() * 100)}`}
          >
            <FontAwesomeIcon icon={item.icon} />
          </a>
        )
      })}
    </S.Container>
  )
}

export default Hero
