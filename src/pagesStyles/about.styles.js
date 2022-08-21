import styled from "@emotion/styled"

export const AboutContent = styled.div`
  margin: 0 auto;
  max-width: 860px;
  width: 100%;
  padding: 1.45rem 1.0875rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;

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
