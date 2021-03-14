import styled from "@emotion/styled"

export const Content = styled.div`
  margin: 0 auto;
  width: 75vh;
  padding: 0 1.0875rem;
  padding-top: 0;

  @media (max-width: 75vh) {
    width: auto;
  }
`

export const GatsbyLink = styled.a`
  margin-left: 5px;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`
export const Main = styled.main`
  min-height: calc(100vh - 88.2px - 56.2px);
`
