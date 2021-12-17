import styled from "@emotion/styled"

export const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

export const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

export const MarkerHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(144, 224, 239, 0.15),
    rgba(144, 224, 239, 0.8) 100%,
    rgba(144, 224, 239, 0.25)
  );
`

export const SimpleHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  transition: 0.4s ease-out;

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

export const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
`
export const PostLink = styled.a`
  text-decoration: none;
  color: inherit;
`
