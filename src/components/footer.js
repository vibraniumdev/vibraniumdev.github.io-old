import React from "react"

import "./layout.css"
import * as S from "./footer.styles"

const Footer = () => {
  return (
    <S.Wrapper>
      <span>© {new Date().getFullYear()}, made with &#x1F5A4; and</span>
      <S.GatsbyLink href="https://www.gatsbyjs.org">GatsbyJS</S.GatsbyLink>
    </S.Wrapper>
  )
}

export default Footer
