import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
}

export const DivContainer = styled.section<IPropsHome>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: space-around;
  align-items: center;

  .info-skills {
    width: 100%;
    /* height: 40%; */
    border-radius: 10px;
    background-color: transparent;
    padding: 20px;
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(20px);
  }

  .footer-info {
    /* background-color: blue; */
    width: 100%;
    /* height: 37%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    div {
      border-radius: 6px;
      width: 30%;
      height: 14rem;
      border-radius: 10px;
      background-color: transparent;

      box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
      backdrop-filter: blur(15px);
      z-index: 2;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      flex-direction: column;
      padding: 10px;
      text-align: center;

      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        width: 40px;
        height: 40px;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 50%;
        color: ${props => props.theme.colors.arrow};
      }
      .title-card {
        font-weight: bold;
        font-size: 1rem;
      }
      .info-card {
        font-size: 0.9rem;
        /* color: blue; */
      }

      @media screen and (max-width: 1450px) {
        height: 11rem;
        .title-card {
        font-size: 0.9rem;
      }
      .info-card {
        font-size: 0.8rem;
      }
    }
  }

  /* background-color: blue; */
`
