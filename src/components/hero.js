import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMedium,
  faGithub,
  faLinkedin,
  faTwitch,
  faDev,
  faHackerrank,
  faMastodon,
  faGoodreads,
} from "@fortawesome/free-brands-svg-icons"

import * as S from "./hero.styles"
const Hero = () => (
  <S.Container>
    <a
      href="https://github.com/ggteixeira/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.twitch.tv/guilhermestreams/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTwitch} />
    </a>
    <a
      href="https://dev.to/guiteixeira"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faDev} />
    </a>
    <a
      href="https://www.hackerrank.com/guiemi_teixeira"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faHackerrank} />
    </a>
    <a
      href="https://www.linkedin.com/in/guiatf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a
      href="https://medium.com/blacktech"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faMedium} />
    </a>
    <a
      target="_blank"
      rel="me noopener noreferrer"
      href="https://mastodon.com.br/@gui"
    >
      <FontAwesomeIcon icon={faMastodon} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.goodreads.com/guiemi"
    >
      <FontAwesomeIcon icon={faGoodreads} />
    </a>
  </S.Container>
)

export default Hero
