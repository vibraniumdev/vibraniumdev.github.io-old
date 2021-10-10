import { Link } from "gatsby"
import styled from "@emotion/styled"

export const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

export const NavLink = styled(Link)`
  color: black;
  margin-left: 1rem;
  text-decoration: none;
  display: inline-block;
  position: relative;
  transition: 0.4s ease-out;

  :nth-child(1) {
    margin-left: 0;
  }

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 3px;
    top: 100%;
    left: 0;
    background-color: #6c757d;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    transform: scaleX(0);
    transform-origin: right;
  }

  &.active {
    color: #6c757d;
    :after {
      transform: scaleX(1);
    }
  }

  :hover {
    color: #6c757d;
    transition: 0.4s ease-in;

    :after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`

export const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`
