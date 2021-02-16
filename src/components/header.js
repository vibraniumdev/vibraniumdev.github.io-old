import PropTypes from "prop-types"
import React from "react"

import * as S from "./header.styles"

const Header = () => (
  <S.SiteHeader>
    <S.Content>
      <p>
        <S.HomeLink to="/">Home</S.HomeLink>
        <S.NavLink to="/blog">Blog</S.NavLink>
        <S.GitHubLink href="https://github.com/vibraniumdev/">
          GitHub
        </S.GitHubLink>
        <S.NavLink to="/about">About</S.NavLink>
      </p>
    </S.Content>
  </S.SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
