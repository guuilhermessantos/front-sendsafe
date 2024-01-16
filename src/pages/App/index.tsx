import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  /* @media (min-height: 768px) {
    height: 91.9vh;
  }
  @media (min-height: 800px) {
    height: 93.4vh;
  } */
  /* @media screen and (min-width: 1440px) {
    height: 98.4vh;
  } */
  /* overflow-y: hidden; */
`
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  position: relative;
  /* padding: 10px; */
  overflow-y: auto;
  width: 100%;

  /* @media screen and (max-width: 1440px) {
    height: 88vh;
  } */
`
