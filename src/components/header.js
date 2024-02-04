import PropTypes from "prop-types"
import React from "react"

import * as S from "./header.styles"
import Switcher from "./switcher"
const Header = () => {
  return (
    <S.NavBar>
      <S.NavLinks>
        <S.NavItemBrand>
          <S.NavLinkBrand className="brand" to="/" activeClassName="active">
            Guilherme Teixeira
          </S.NavLinkBrand>
        </S.NavItemBrand>
      </S.NavLinks>
      <S.NavLinks>
        <S.NavItem>
          <S.NavLink to="/blog" activeClassName="active">
            Articles
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink to="/projects" activeClassName="active">
            Projects
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink to="/learning" activeClassName="active">
            Learning
          </S.NavLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavLink to="/about" activeClassName="active">
            About
          </S.NavLink>
        </S.NavItem>
        <Switcher />
      </S.NavLinks>
    </S.NavBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
