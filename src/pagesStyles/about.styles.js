import styled from "@emotion/styled"
import { theme } from "../theme/theme"

const { palette } = theme

const primarySwitch = (props) => {
  return props.lightTheme
    ? palette.lightTheme.primary
    : palette.darkTheme.primary
}

const secondarySwitch = (props) => {
  return props.lightTheme
    ? palette.lightTheme.secondary
    : palette.darkTheme.secondary
}

const tertiarySwitch = (props) => {
  return props.lightTheme
    ? palette.lightTheme.tertiary
    : palette.darkTheme.tertiary
}

export const AboutContent = styled.div`
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
  padding: 0.5rem;
  // background-color: ${palette.lightTheme.primary};
  background-color: ${primarySwitch};
  color: ${secondarySwitch};
`

export const TitleContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 0.25rem;
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

export const GraySubTitle = styled.h2`
  // color: ${palette.neutral.darker};
  color: ${secondarySwitch};
  transition: 0.4s ease-out;

  :hover {
    transition: 0.2s ease-in;
    color: ${palette.neutral.pure};
  }
`
