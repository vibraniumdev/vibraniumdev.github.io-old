import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;

  max-width: 768px;
  width: calc(768px / 2);
  margin: 0 auto;
  margin-bottom: 1rem;

  text-align: center;
  padding: 1rem 0;
  height: calc(100vh - 30rem);

  svg {
    // margin: 0 1.25rem;
    margin-inline: 0.75rem;
    padding: 0;
    font-size: 1.5rem;

    :hover {
      color: #6c757d;
      transition-duration: 0.2s;
    }
  }
`
