import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
}

export const DivContainer = styled.section<IPropsHome>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 10px;
  align-items: center;
  justify-content: center;
  .card-about-info {
    /* background-color: red; */
    border-radius: 6px;
    width: 100%;
    height: 80%;
    border-radius: 10px;
    background-color: transparent;
    padding: 20px;
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(20px);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .div-conteudo {
      margin-top: 10px;
      display: flex;
      width: 100%;
      height: 90%;
      .div-img {
        width: 50%;
        height: 100%;
        background-color: blue;
      }
      .div-info {
        width: 50%;
        height: 100%;
        background-color: red;
      }
    }
  }

  /* background-color: blue; */
`
