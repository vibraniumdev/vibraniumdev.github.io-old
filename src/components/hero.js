import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMedium,
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import {} from "@fortawesome/free-regular-svg-icons"

import * as S from "./hero.styles"
const Hero = () => (
  <S.Container>
    <a
      href="https://github.com/vibraniumdev/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/guiemi/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>

    <a
      href="https://medium.com/@guiemi"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faMedium} />
    </a>
    
    <a
      href="https://twitter.com/vibraniumdev"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>

    <a
      href="https://www.instagram.com/violaodeinverno/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </S.Container>
)

export default Hero
