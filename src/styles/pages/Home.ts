import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 1rem 0px 1rem;
  .div-bubbles {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
  }

  @media screen and (max-width: 550px) {
    padding: 0px 0.3rem;
    /* background-color: blue; */
  }
`

export const Scroll = styled.div`
  /* width: 100vw; */

  /* overflow: scroll; */
`
