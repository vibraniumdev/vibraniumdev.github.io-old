import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 2rem 0;
  max-width: 1280px;
  margin: 0.5rem auto;
  width: 90%;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 700px) {
    width: 90%;
    grid-template-columns: 3fr;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    width: 90%;
    grid-template-columns: 2fr 2fr;
  }
`

export const Card = styled.a`
  text-decoration: none;
  padding: 0.5rem;
  margin: 0.5rem;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }

  :hover {
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.31);
    transition-duration: 0.2s;
  }
`

export const Content = styled.div`
  padding: 0.5rem 0.5rem 0 0.5rem;
  height: 75%;

  h4,
  p {
    margin-bottom: 0.5rem;
    height: max-content;
  }
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  height: 25%;

  div {
    display: flex;
    flex-direction: row;
    &:first-child {
      margin-right: 0.5rem;
    }

    h4 {
      margin: 0;
    }

    .icon {
      margin: 0;
      height: auto;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
      margin: 0.9rem;
    }
  }
`
