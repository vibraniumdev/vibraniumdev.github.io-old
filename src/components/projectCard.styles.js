import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 2rem 0;
  max-width: 1280px;
  margin: 0.5rem auto;
  width: 90%;
  
  /* @media (min-width: 601px) {
    width: 90%;
  }
  
  @media (min-width: 993px) {
    width: 80%;
  } */

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  
  `


export const Card = styled.div`
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
  padding: 0.5rem 0.5rem;
`

export const Stats = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

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
    }
  }
`
