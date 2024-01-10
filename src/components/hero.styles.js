import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  text-align: center;
  padding: 1rem 0;

  svg {
    margin: 0 0.75rem;
    padding: 0;
    font-size: 1.5rem;

    :hover {
      color: #6c757d;
      transition-duration: 0.2s;
    }
  }
`
