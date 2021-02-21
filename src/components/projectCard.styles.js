import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 2rem 0;
`

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`

export const Card = styled.div`
  padding: 1rem;
  background: #fff;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`

export const Content = styled.div`
  padding: 1rem 0;
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    &:first-child {
      margin-right: 0.5rem;
    }

    h4 {
      margin: 0;
    }

    span {
      color: #000;
      /* margin-left: 0.5rem; */
    }
  }
`