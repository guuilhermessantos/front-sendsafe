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
  /* background-color: red; */
  height: 100vh;
  /* padding: 1rem; */
  justify-content: center;
  align-items: center;
  /* background-color: red; */

  /* h2 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  } */

  .container-techs {
    width: 100%;
    height: 25vh;
    border-radius: 10px;
    background-color: transparent;
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(15px);
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 1vh;
    .divTechs {
      width: 100%;
      height: 100%;
      z-index: 2;
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      padding: 1rem;
      gap: 1rem;
      /* max-width: 100rem; */
      overflow-x: auto;
      pointer-events: auto;
      cursor: grab;
      overflow-x: scroll;
      scrollbar: hidden;
      align-items: center;

      /* flex space-x-3 py-3 overflow-x-scroll scrollbar-hide */

      :active {
        cursor: grabbing;
      }
      ::-webkit-scrollbar {
        height: 0;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        /* background: black; */
        background: ${props => props.theme.colors?.text};
        border-radius: 2px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors?.text};
      }
      /* display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-template-rows: auto; */
      /* display: grid; */
      /* grid-template-columns: auto auto; */
      /* grid-template-rows: auto auto; */

      .card-techs {
        width: 10rem;
        height: 15vh;
        padding: 1rem;
        border-radius: 10px;
        background-color: transparent;
        box-shadow: 0 8px 20px rgb(0 0 0 / 30%);
        backdrop-filter: blur(15px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        img {
          width: 6vh;
          height: 6vh;
        }

        span {
          /* font-size: 0.8rem; */
          text-align: center;
          font-weight: bold;
        }
        transition: all 0.2s ease-in-out;
        :hover {
          box-shadow: 0 5px 20px ${props => props.theme.colors?.primary};
        }
      }
    }
    /* @media screen and (max-width: 1500px) {
      .divTechs {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto;
      }
      height: 22rem;
    }
    @media screen and (max-width: 1060px) {
      .divTechs {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
      }
      height: 29rem;
    } */
  }

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
    /* height: 50vh; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    /* height: 100%; */
    align-items: center;
    gap: 2vh;
    /* background-color: red; */
    div {
      border-radius: 6px;
      width: 30%;

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
      /* background-color: red; */
      height: 20vh;

      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3vh;
        width: 4.5vh;
        height: 4.5vh;
        background-color: ${props => props.theme.colors?.primary};
        border-radius: 50%;
        color: ${props => props.theme.colors?.arrow};
      }
      .title-card {
        font-weight: bold;
        /* font-size: 1rem; */
      }
      .info-card {
        font-size: 0.9rem;
        /* color: blue; */
      }

      @media screen and (max-width: 1450px) {
        /* height: 11rem; */

        .info-card {
          font-size: 0.8rem;
        }
      }
    }
  }

  @media screen and (max-width: 1410px) {
    .footer-info {
      /* margin-top: 10px; */
      flex-direction: column;

      /* gap: 20px; */
      /* justify-content: space-around; */
      /* height: 30rem; */
      div {
        width: 99%;
        /* height: 9rem; */
      }
    }
  }
  @media screen and (max-width: 500px) {
    /* height: 9rem; */
    /* background-color: red; */
    .footer-info {
      /* margin-top: 10px; */
      flex-direction: column;

      /* gap: 1rem; */
      justify-content: space-around;

      /* height: 30rem; */
      /* background-color: blue; */

      .card-one {
      }
      div {
        /* border-radius: 6px; */
        width: 99%;
        /* height: 9rem !important; */
        /* background-color: red; */
      }
    }
  }

  /* background-color: blue; */
`
