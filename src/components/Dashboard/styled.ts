import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
}

export const DivContainer = styled.section<IPropsHome>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  /* background-color: red; */
  /* padding: 10px; */

  /* background-color: red; */
  .div-info {
    width: 60%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .info {
      width: 80%;
      border-radius: 10px;
      background-color: transparent;
      /* height: 100%; */
      z-index: 1;
      padding: 1.5rem;
      box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
      backdrop-filter: blur(20px);
      font-size: 1rem;
      h1 {
        font-size: 3.5rem;
        margin: 0;
      }

      span {
        font-size: 1rem;
      }
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
      width: 100%;
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
          color: ${props => props.theme.colors.arrow};
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-top: 1.7rem;
          margin-bottom: 10px;
          z-index: 1;
          height: 50px;
          width: 150px;
          border-radius: 5px;
          backdrop-filter: blur(5px);
          /* background-color: ${props => props.theme.colors.primary}; */
          background-color: ${props => props.theme.colors.primary};
          box-shadow: 0 8px 30px ${props => ` ${props.theme.colors.primary}`};
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
            color: ${props => props.theme.colors.arrow};
          }
          :hover {
            transition: all 0.4s ease-in-out;
            border-radius: 4em;
            box-shadow: 0 0px 10px ${props => ` ${props.theme.colors.primary}`};
          }
          /* :active {
            color: white;
            top: 1px;
            background-image: linear-gradient(
              to right,
              ${props =>
            props.theme.colors.primary},
              ${props =>
            props.theme.colors
              .primary}
            );
            box-shadow: 0 4px 15px 0 ${props =>
            props.theme.colors
              .primary};
            background-position: 100% 0;
            moz-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            .arrow-down {
              color: white;
            }
          } */
          :active {
            transition: all 0.4s ease-in-out;
            box-shadow: 0 0px 70px ${props => ` ${props.theme.colors.primary}`};
          }
        }
      }
    }
  }
  .div-contatos {
    margin-top: 1.4rem;
    width: 80%;
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
    .div-text {
      display: flex;
      align-items: center;
      width: 30%;
      /* background-color: red; */
      height: 40px;
    }
    .div-icon {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50%;

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
        :hover {
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
    /* background-color: blue; */
    width: 40%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      z-index: 1;
      height: 20rem;
      width: 20rem;
      background-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 30px ${props => props.theme.colors.primary};
      border-radius: 50%;
    }
    /* background-color: red; */
  }

  @media screen and (max-width: 1220px) {
    flex-direction: column-reverse;

    .div-info {
      width: 100%;
      height: 70%;
    }
    .right {
      width: 100%;
      height: 50%;

      img {
        height: 15rem;
        width: 15rem;
      }
    }
  }
  /* .div-bubbles {
    max-width: 99%;
    position: absolute;
    display: flex;
  } */
  /* background-color: red; */
`
