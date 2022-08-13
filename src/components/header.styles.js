import { Link } from "gatsby"
import styled from "@emotion/styled"

export const NavBar = styled.nav`
  max-width: 860px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  text-align: center;
  align-content: center;
`

export const NavLinks = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0.5rem;
  :first-of-type {
    margin-left: 0rem;
    padding-left: 0rem;
  }
`

export const NavItem = styled.li`
  text-align: center;
  margin: auto;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  margin-left: 0.5rem;
  transition: 0.4s ease-out;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    background-color: #6c757d;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    transform: scalex(0);
    transform-origin: right;
  }

  &.active {
    color: #6c757d;
    :after {
      transform: scalex(1);
    }
  }

  :hover {
    color: #6c757d;
    transition: 0.4s ease-in;

    :after {
      transform: scalex(1);
      transform-origin: left;
    }
  }
`

export const NavLinkBrand = styled(NavLink)`
  :first-of-type {
    margin-left: 0.75rem;
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
