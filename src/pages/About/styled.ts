import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
}

const DivContainer = styled.section<IPropsHome>`
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 10;
  height: 100vh;
  gap: 2vh;
  /* background-color: red; */
  .card-container {
    /* background-color: pink; */
    padding-top: 1.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    min-height: 90vh;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(20px);
    /* padding-top: 2rem; */

    /* h2 {
      height: 3rem;
    } */

    /* height: 100%; */

    .info-container {
      padding: 0 1rem 0 1rem;
      width: 100%;
      gap: 2rem;
      display: flex;
      height: 25vh;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 960px) {
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
      }
    }
    hr {
      width: 99%;
    }
    /* h2 {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 7%;
      box-shadow: 0 01px 15px rgb(0 0 0 / 50%);
      backdrop-filter: blur(20px);
      color: ${props =>
      props.theme.colors.text};
    } */
    .card-info {
      padding: 1rem;

      width: 100%;
      height: 100%;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
      backdrop-filter: blur(20px);
      color: ${props => props.theme.colors.text};
      line-height: 1.2rem;
      /* font-weight: bold; */
      /* text-align: center; */
      display: flex;
      /* justify-content: center; */
      align-items: center;
      @media screen and (max-width: 960px) {
        height: 6rem;
        /* font-size: 0.9rem; */
      }
      @media screen and (max-width: 520px) {
        /* height: 5rem; */
        /* font-size: 0.8rem; */
      }
    }
  }

  .card-about {
    /* background-color: pink; */
    /* background-color: blue; */
    padding-top: 1.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    min-height: 20vh;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(20px);
    .info-container {
      padding: 0 1rem 0 1rem;
      width: 100%;
      /* gap: 2rem; */
      display: flex;
      height: 25vh;
      align-items: center;
      justify-content: space-between;
      /* text-align: ;; */

      @media screen and (max-width: 960px) {
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        /* font-size: 2.5vh; */
      }
    }
  }
  .card-journey {
    /* background-color: pink; */
    /* background-color: red; */
    padding-top: 1.5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    min-height: 55vh;
    gap: 2vh;
    border-radius: 10px;
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(20px);
  }
`

export default DivContainer
