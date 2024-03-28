import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
  isIOS: string
}

export const DivContainer = styled.section<IPropsHome>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .journey-area {
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 52vh;
    width: 100%;
    cursor: grab;

    :active {
      cursor: grabbing;
    }

    section {
      border-radius: 0;
      /* max-width: 100%; */
      border-left: none;
      border-right: none;
      z-index: 10;
      /* margin-top: 4vh; */
      padding: 13vh 0 0 3vh;
      width: 100%;
      /* max-width: 90vw; */
      height: 55vh;
      /* min-height: 50vh; */
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-y: hidden;
      overflow-x: auto;
      /* cursor: grab; */
      /* background-color: #ffffff; */
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
      border-radius: 0px 0px 10px 10px;
      /* border: #d1d1d1 solid 1px; */
      /* background-color: ${props => props.theme.colors.text}; */
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-blend-mode: luminosity;
      background-image: ${props =>
        props.isIOS === 'true' ? '' : 'url(/image/paralax.webp)'};
    }
    :active {
      /* cursor: grabbing !important; */
    }
    ::-webkit-scrollbar-thumb {
      background: #d1d1d1;
      /* background: red; */
    }
  }

  .journey-area > section::-webkit-scrollbar {
    height: 0;
  }

  .journey-item {
    min-width: 20rem;
    max-width: 20rem;
    position: relative;
    div {
      font-size: 1rem !important;
      padding: 0.6rem 1rem;
      background-color: #00286d70;
      border-radius: 5px;
      margin: 1rem;
      margin-right: 2rem;
      height: 20vh;
      /* background-color: red; */
      backdrop-filter: blur(4px);

      h3 {
        color: #ffffff;
        background-color: #3c7de7;
        width: fit-content;
        padding: 0.2rem 1rem;
        border-radius: 2rem;
        transform: translateX(-3rem);
      }
      p {
        color: #ffffff;
        margin-top: 0.3rem;
        font-size: 1rem;
        gap: -1px;
        line-height: 1.1rem;
      }
      span {
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        background-color: #d7e6ff;
        padding: 0.3rem 0.3rem;
        border-radius: 2rem;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
      }
    }
    :nth-child(odd) {
      border-bottom: 2px solid #3c7de7;
      transform: translateY(-49.3%);
    }
    :nth-child(even) {
      border-top: 2px solid #3c7de7;
      transform: translateY(49.3%);
    }

    :nth-child(odd)::before,
    :nth-child(even)::before {
      content: '';
      background: #3c7de7;
      width: 2px;
      height: 75%;
      position: absolute;
      top: 25%;
      transform: translateX(-50%);
    }

    :nth-child(even)::before {
      top: -0%;
      height: 20%;
    }

    :nth-child(odd)::after,
    :nth-child(even)::after {
      content: '';
      background: #3c7de7;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      position: absolute;
      top: 0;
      transform: translate(-50%, -50%);
    }

    :nth-child(odd)::after {
      top: 100%;
    }
  }

  /* .card-about-info {
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
  } */

  /* background-color: blue; */
`
