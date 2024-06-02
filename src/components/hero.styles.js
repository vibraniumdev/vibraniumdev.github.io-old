import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;

  width: calc(256px * 2);
  margin: 0 auto;
  margin-bottom: 1rem;

  text-align: center;
  padding: 1rem 0;
  height: calc(100vh - 30rem);

  svg {
    font-size: 1.75rem;

    :hover {
      color: #6c757d;
      transition-duration: 0.2s;
    }
  }
`
