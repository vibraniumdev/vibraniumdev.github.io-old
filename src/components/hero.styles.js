import styled from "@emotion/styled"
import { theme } from "../theme/theme"
const { palette } = theme

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;

  width: calc(256px * 1.25);
  margin: 0 auto;
  margin-bottom: 1rem;

  text-align: center;
  padding: 1rem 0;
  height: calc(100vh - 30rem);

  svg {
    font-size: 1.75rem;

    :hover {
      color: ${palette.neutral.pure};
      transition-duration: 0.2s;
    }
  }
`
