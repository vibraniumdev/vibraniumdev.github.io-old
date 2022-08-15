import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMedium,
  faGithub,
  faLinkedin,
  faTwitch,
  faDev,
  faMastodon,
  faGoodreads,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import * as S from "./hero.styles"

const heroList = [
  {
    href: "https://www.linkedin.com/in/guiatf",
    icon: faLinkedin,
  },
  {
    href: "https://github.com/ggteixeira/",
    icon: faGithub,
  },
  {
    href: "https://dev.to/guiteixeira",
    icon: faDev,
  },
  {
    href: "https://medium.com/blacktech",
    icon: faMedium,
  },
  {
    href: "https://www.goodreads.com/guiemi",
    icon: faGoodreads,
  },
  {
    href: "https://mastodon.com.br/@gui",
    icon: faMastodon,
  },
  {
    href: "https://twitter.com/teixeiragg",
    icon: faTwitter,
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
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={item.icon} />
          </a>
        )
      })}
    </S.Container>
  )
}

export default Hero
