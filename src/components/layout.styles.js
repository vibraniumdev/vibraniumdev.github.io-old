import styled from "@emotion/styled";
import { theme } from "../theme/theme";

const { palette } = theme;

export const Content = styled.div`
  margin: 0 auto;
  padding: 0 1.0875rem;
  padding-top: 0;
  width: auto;
  background-color: ${palette.neutral.white};

  @media (max-width: 75vh) {
    width: auto;
    padding: unset;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 88.2px - 46.2px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const GatsbyLink = styled.a`
  margin-left: 0.4rem;
`;
