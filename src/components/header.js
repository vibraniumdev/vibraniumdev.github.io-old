import PropTypes from "prop-types"
import React from "react"

import * as S from "./header.styles"
const Header = () => (
  <S.SiteHeader>
    <S.Content>
      <p>
        <S.HomeLink to="/">Home</S.HomeLink>
        <S.NavLink to="#">
          <del>Blog</del>
        </S.NavLink>
        <S.NavLink to="/projects">Projects</S.NavLink>
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
