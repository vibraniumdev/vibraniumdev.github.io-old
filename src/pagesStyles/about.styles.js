import styled from "@emotion/styled"

const AboutContent = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`
export { AboutContent }

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  svg {
    :hover {
      color: #6c757d;
      transition: 0.1s ease-in;
    }
  }
`

export const FlexTitle = styled.h3`
  display: inline;
  transition: 0.4s ease-out;
  margin-bottom: 0;
  cursor: pointer;

  &.active {
    color: #6c757d;
    :after {
      transform: scaleX(1);
    }
  }

  :hover {
    color: #6c757d;
    transition: 0.1s ease-in;

    :after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`
