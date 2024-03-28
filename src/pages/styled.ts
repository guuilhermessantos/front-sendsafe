import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  position: relative;
  /* padding: 10px; */
  overflow-y: auto;
  width: 100%;
`

export const ContainerIndex = styled.div`
  /* width: 100%;
  height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 1rem 0px 1rem;

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
