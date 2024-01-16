import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 30px 0px 30px;
  .div-bubbles {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
  }

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Scroll = styled.div`
  /* width: 100vw; */

  /* overflow: scroll; */
`
