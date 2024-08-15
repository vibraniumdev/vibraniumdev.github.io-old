import { Link } from "gatsby"
import styled from "@emotion/styled"
import { theme } from "../theme/theme"

const { palette } = theme

export const NavBar = styled.nav`
  max-width: 768px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  text-align: center;
  align-content: center;
  margin-bottom: 1rem;
`

export const NavLinks = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0 0.25rem 0 0;
  :first-of-type {
    margin-left: 0rem;
    padding-left: 0rem;
  }
`

export const NavItem = styled.li`
  text-align: center;
  margin: auto;

  &:nth-child(1) {
    a {
      margin-left: 0px;
    }
  }

  &:nth-child(4) {
    a {
      margin-right: 0.5rem;
    }
  }
`

export const NavItemBrand = styled.li`
  text-align: center;
  margin: auto;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  margin-left: 0.5rem;
  transition: 0.4s ease-out;

  &.active {
    color: ${palette.neutral.pure};
    :after {
      transform: scalex(1);
    }
  }

  :hover {
    color: ${palette.neutral.pure};
    transition: 0.2s ease-in;

    :after {
      transform: scalex(1);
      transform-origin: left;
    }
  }
`

export const NavLinkBrand = styled(NavLink)`
  white-space: nowrap;

  :hover {
    color: ${palette.neutral.dark};
  }
`

export const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`
