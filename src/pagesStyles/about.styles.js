import styled from "@emotion/styled"
import { theme } from "../theme/theme"

const { palette } = theme

export const AboutContent = styled.div`
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
  padding: 0.75rem;
`

export const TitleContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const GraySubTitle = styled.h2`
  color: ${palette.neutral.darker};
  transition: 0.4s ease-out;
  margin-bottom: 1rem;

  :hover {
    transition: 0.2s ease-in;
    color: ${palette.neutral.pure};
  }
`

export const FlexTitle = styled.h3`
  display: inline;
  transition: 0.4s ease-out;
  margin-bottom: 0;

  &.active {
    color: ${palette.neutral.darker};
    :after {
      transform: scaleX(1);
    }
  }

  :hover {
    color: ${palette.neutral.pure};
    transition: 0.2s ease-in;

    :after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`
