import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
}

export const DivContainer = styled.section<IPropsHome>`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  /* padding: 10px; */

  /* background-color: red; */
  .div-info {
    width: 60%;
    /* background-color: red; */
    /* background-color: ; */
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .info {
      height: 31vh;
      background-color: blue;
      width: 90%;

      border-radius: 10px;
      background-color: transparent;

      /* height: 100%; */
      z-index: 1;
      padding: 3vh;
      box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
      backdrop-filter: blur(20px);
      /* font-size: 1rem; */
      h1 {
        /* font-size: 3rem; */
        margin: 0;
      }

      /* span {
        font-size: 1rem;
      } */
      .text-weight {
        font-weight: bold;
      }
      .text {
        width: 100%;
        /* background-color: red; */
        z-index: 1;
      }

      /* background-color: blue; */
    }

    .div-button {
      /* background-color: red; */
      width: 100%;
      /* height: 50%; */
      height: 10vh;
      /* background-color: red; */
      display: flex;
      align-items: center;
      justify-content: center;

      /* background-color: red; */
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        /* justify-content: center; */

        button {
          cursor: pointer;
          color: ${({ theme }) => theme.colors?.arrow};
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-top: 0.8rem;
          /* margin-bottom: 10px; */
          z-index: 1;
          height: 6.5vh;
          width: 150px;
          border-radius: 5px;
          backdrop-filter: blur(5px);
          /* background-color: ${props => props.theme.colors?.primary}; */
          background-color: ${props => props.theme.colors?.primary};
          box-shadow: 0 8px 30px ${props => ` ${props.theme.colors?.primary}`};
          border: 0;

          -moz-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
          -webkit-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
          .text-button {
            font-size: 1rem;
            font-weight: bold;
          }
          .arrow-down {
            transition: all 0.4s ease-in-out;
            font-size: 20px;
            color: ${({ theme }) => theme.colors?.arrow};
          }
          :hover {
            transition: all 0.4s ease-in-out;
            border-radius: 4em;
            box-shadow: 0 0px 10px ${props => ` ${props.theme.colors?.primary}`};
          }
          :active {
            transition: all 0.4s ease-in-out;
            box-shadow: 0 0px 70px ${props => ` ${props.theme.colors?.primary}`};
          }
        }
      }
    }
  }
  .div-contatos {
    margin-top: 3vh;
    width: 90%;
    /* height: 0px; */
    border-radius: 10px;
    background-color: transparent;
    z-index: 1;
    padding: 20px;
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(20px);
    /* height: 30px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    .div-text {
      display: flex;
      align-items: center;
      width: 30%;
      font-weight: bold;
      /* background-color: blue; */
      /* height: 40px; */
    }
    .div-icon {
      /* height: 40px; */
      /* background-color: red; */
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 65%;

      .linkedin {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #0a66c2;
        color: white;
        font-size: 20px;
      }
      .github {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
        font-size: 25px;
      }
      .instagram {
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(
            circle farthest-corner at 35% 90%,
            #fec564,
            transparent 50%
          ),
          radial-gradient(
            circle farthest-corner at 0 140%,
            #fec564,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 0 -25%,
            #5258cf,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 20% -50%,
            #5258cf,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 100% 0,
            #893dc2,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 60% -20%,
            #893dc2,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 100% 100%,
            #d9317a,
            transparent
          ),
          linear-gradient(
            #6559ca,
            #bc318f 30%,
            #e33f5f 50%,
            #f77638 70%,
            #fec66d 100%
          );

        :hover {
          box-shadow: 0 8px 30px rgb(0 0 0 / 12%);
        }
        color: white;
        font-size: 25px;
      }
      a {
        text-decoration: none;
      }
      button {
        cursor: pointer;
        border: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 8px 30px rgb(0 0 0 / 12%);
        :active {
          animation: girar 2s infinite linear;

          @keyframes girar {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(300deg);
            }
            100% {
              transform: rotate(350deg);
            }
          }
        }
      }
    }
  }
  .right {
    width: 40%;
    padding: 1rem;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      z-index: 1;
      height: 35vh;
      width: 35vh;
      background-color: ${props => props.theme.colors?.primary};
      /* background-color: blue; */
      box-shadow: 0 0 30px ${props => props.theme.colors?.primary};
      border-radius: 50%;
    }
    /* background-color: red; */
  }

  @media screen and (max-width: 1220px) {
    flex-direction: column-reverse;

    .div-contatos {
      /* margin-top: 1rem; */
    }

    .div-info {
      width: 100%;
      /* background-color: red; */
      height: 70vh;
      /* height: 70%; */
    }

    .right {
      /* background-color: red; */
      width: 100%;
      height: 20vh;
      /* height: 50%; */

      img {
        /* height: 14rem;
        width: 14rem; */
      }
    }
  }
  @media screen and (max-width: 550px) {
    flex-direction: column-reverse;

    .div-info {
      width: 100%;
      /* height: 63%; */
    }

    .info {
      /* h1 {
        font-size: 5vw !important;
      } */
      /* span {
        font-size: 3.5vw !important;
      } */
    }

    .div-contatos {
      /* span {
        font-size: 4vw !important;
      } */

      .linkedin {
        width: 10px;
        height: 10px;
      }
    }

    .div-icon {
      /* background-color: red; */
      button {
        width: 6vh !important;
        height: 6vh !important;
        /* font-size: 3.5vh !important; */
      }
    }

    /* .div-contatos {
      margin-top: 1rem;
    } */
    .right {
      width: 100%;
      /* height: 15rem; */

      img {
        /* height: 13rem;
        width: 13rem; */
      }
    }

    /* .div-text {
      height: 28px;
    } */
    /* .div-icon {
      height: 28px;
    } */
    /* .linkedin {
      font-size: 10px;
    } */
    .github {
    }
    .instagram {
    }
  }
  @media screen and (max-width: 320px) {
    .div-info {
      width: 100%;

      /* height: 63%; */
    }

    .info {
      height: 42vh !important;
      /* h1 {
        font-size: 6.5vw !important;
      } */
      /* span {
        font-size: 4vw !important;
      } */
    }

    /* .div-contatos {
      margin-top: 1rem;
    } */
    .right {
      width: 100%;
      /* height: 15rem; */

      img {
        /* height: 13rem;
        width: 13rem; */
      }
    }

    /* .div-text {
      height: 28px;
    } */
    /* .div-icon {
      height: 28px;
    } */
    /* .linkedin {
      font-size: 10px;
    } */
    .github {
    }
    .instagram {
    }
  }
  /* .div-bubbles {
    max-width: 99%;
    position: absolute;
    display: flex;
  } */
  /* background-color: red; */
`
