import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
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
  // transition: 0.4s ease-out;

  svg,
  a {
    // transition: 0.4s ease-out;
    font-size: 1.75rem;

    :hover {
      color: #6c757d;
      transition-duration: 0.2s;
    }
  }
`
