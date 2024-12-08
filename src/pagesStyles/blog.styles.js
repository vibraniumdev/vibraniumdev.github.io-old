import styled from "@emotion/styled"
import { OpenInNew } from "@mui/icons-material"
import { theme } from "../theme/theme"
const { palette } = theme

export const Content = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding-left: 0.75rem;
`

export const PostContainer = styled.div`
  margin-bottom: 2rem;
`

export const PostLink = styled.a`
  text-decoration: none;
  color: inherit;
`
export const OpenInNewIcon = styled(OpenInNew)`
  visibility: visible;
`

export const PostTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  flex-direction: row;
  align-items: center;
  transition: 0.4s ease-out;

  h3 {
    margin-bottom: 0;
  }

  &:hover ${OpenInNewIcon} {
    visibility: visible;
    color: ${palette.neutral.pure};
    transition: 0.1s ease-in;
  }
`

export const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
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
    color: ${palette.neutral.pure};
    :after {
      transform: scaleX(1);
    }
  }

  :hover {
    color: ${palette.neutral.pure};
    transition: 0.1s ease-in;

    :after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`
