import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  sequencia?: number
  controlSide?: string
}

export const DivContainer = styled.section<IPropsHome>`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  /* background-color: blue; */
  /* .div-bubbles {
    width: 100%;
    position: absolute;
    display: flex;
    background-color: red;
  } */
`
export const Bubbles = styled.span<IPropsHome>`
  z-index: 1;
  width: 30px;
  height: 30px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  margin: 0 4px;
  box-shadow: 0 0 0 10px #59cd9044, 0 0 50px #59cd90, 0 0 100px #59cd90;
  animation: ${props =>
    `animate calc(1000s / ${props.sequencia}) linear infinite`};
  transition: all 0.1s ease-in-out;
  /* @media screen and (max-width: 1540px) {
    width: 20px;
    height: 20px;
  } */
  /* @media screen and (max-width: 1540px) {
    width: 15px;
    height: 15px;
  }
  @media screen and (max-width: 1040px) {
    width: 10px;
    height: 10px;
  }
  @media screen and (max-width: 840px) {
    width: 5px;
    height: 5px;
    box-shadow: 0 0 0 5px #59cd9044, 0 0 25px #59cd90, 0 0 50px #59cd90;
  }
  @media screen and (max-width: 640) {
    width: 2px;
    height: 2px;
    box-shadow: 0 0 0 5px #59cd9044, 0 0 25px #59cd90, 0 0 50px #59cd90;
  }
  @media screen and (max-width: 540) {
    width: 12px;
    height: 11px;
    box-shadow: 0 0 0 2px #59cd9044, 0 0 12px #59cd90, 0 0 22px #59cd90;
  } */
  :hover {
    background-color: ${props => props.theme.colors.mode};
    box-shadow: ${props =>
      `0 0 0 5px ${props.theme.colors.mode_hover}, 0 0 25px ${props.theme.colors.mode}, 0 0 50px ${props.theme.colors.mode}`};
  }

  @keyframes animate {
    0% {
      transform: translateY(200vh) scale(0);
    }
    100% {
      transform: translateY(-210vh) scale(1);
    }
  }
  :nth-of-type(even) {
    background-color: #2dc3ff;
    box-shadow: 0 0 0 10px #2dc3ff44, 0 0 50px #2dc3ff, 0 0 100px #2dc3ff;
    transition: all 0.1s ease-in-out;
    :hover {
      background-color: ${props => props.theme.colors.mode};
      box-shadow: ${props =>
        `0 0 0 5px ${props.theme.colors.mode_hover}, 0 0 25px ${props.theme.colors.mode}, 0 0 50px ${props.theme.colors.mode}`};
    }

    /* @media screen and (max-width: 840px) {
      width: 5px;
      height: 5px;
      box-shadow: 0 0 0 5px #59cd9044, 0 0 25px #59cd90, 0 0 50px #59cd90;
      box-shadow: 0 0 0 5px #2dc3ff44, 0 0 25px #2dc3ff, 0 0 50px #2dc3ff;
    } */
  }
`
