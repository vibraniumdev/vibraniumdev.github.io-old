import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 2rem 0;
  margin: 0.5rem auto;
  width: 90%;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 700px) {
    width: 90%;
    grid-template-columns: 3fr;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    width: 90%;
    grid-template-columns: 2fr 2fr 2fr;
  }
`

export const Card = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // transition: 0.4s ease-out;

  h4 {
    // transition: 0.4s ease-out;
  }

  p {
    opacity: 0.75;
    // transition: 0.4s ease-out;
  }

  :hover {
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.31);

    transition: 0.4s ease-out;
    div > svg,
    span,
    p {
      opacity: 1;
      // transition: 0.4s ease-out;
    }

    h4 {
      transform: translate(1%);

      transition: 0.4s ease-out;
      opacity: 0.5;
    }
  }
`

export const Content = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.25rem;

  h4,
  p {
    margin-bottom: 0.5rem;
    height: max-content;

    // transition: 0.1s ease-out;
  }
`

export const Stats = styled.div`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;

  div {
    display: flex;
    flex-direction: row;
    &:first-of-type {
      margin-right: 0.5rem;
    }

    h4 {
      margin: 0;
    }

    .icon {
      margin: 0;
      height: auto;
    }

    span,
    svg {
      opacity: 0.75;
      // transition: 0.4s ease-out;
      margin-left: 0.5rem;
      font-size: 0.75rem;
    }
  }
`
