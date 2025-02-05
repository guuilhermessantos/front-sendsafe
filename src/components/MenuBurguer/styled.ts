import styled from 'styled-components'

// interface IPropsHome {
//   // controlSwitch: string
//   // controlSide?: string
// }

export const DivBurguer = styled.div`
  position: fixed;
  top: 5px;
  z-index: 100;
  width: 30px;
  height: 30px;
  padding: 2px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.arrow};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 30px ${props => props.theme.colors.primary};
  backdrop-filter: blur(20px);
  border-radius: 10px;
  /* margin-top: 10px; */
  margin-left: 5px;

  .backdrop {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(4px);
  }

  .menuBurguer {
    position: absolute;
    /* width: -webkit-fill-available; */
    /* min-width: min-content; */
    /* height: fit-content; */
    /* min-height: 45px; */
    bottom: -13rem;
    /* left: 26.99825px; */
    background-color: ${props => props.theme.colors.primary};
    width: 10rem;
    height: 13rem;
    left: 0;
    border-radius: 5px;
    z-index: 1000;
    /* box-shadow: 0 8px 30px rgb(0 0 0 / 12%); */
    border: none;
    box-sizing: border-box;
    padding: 8pt 12pt;
    text-align: center;

    a {
      width: 100%;
      height: 50px;
      color: ${props => props.theme.colors.arrow};
      text-decoration: none;
      cursor: pointer;
      margin: 0;
      font-size: 0.9rem;
      line-height: 2rem;
      p {
        gap: 10rem;
        display: flex;
        align-items: center;
        justify-content: end;
        /* justify-content: space-between; */
        /* background-color: red; */
      }
    }
    .icon {
      /* margin-top: 9px; */
      font-size: 15px;
      margin-right: 7.6rem;
    }
  }

  .before {
    position: absolute;
    background-color: ${props => props.theme.colors.primary};
    width: 30px !important;
    height: 2rem;
    /* min-height: 45px; */
    bottom: -1.5rem;
  }

  i {
    position: absolute;
  }
  .moon-sun {
    height: 50px;
    width: 60px;
    display: flex;
    align-items: center;
  }
  .sun {
    transition: all 0.1s ease-in-out;
  }
  .moon {
    transition: all 0.1s linear;
  }

  .toggle-switch-menu-burguer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 60px;
    cursor: pointer;
  }

  /* div:before {
    content: '';
    position: absolute;

    right: 0;

    top: -5rem;
    width: 50px;
    height: 50px;
    border: 11px solid transparent;

    border-right-color: red;
    transform: rotate(92deg);
  } */
`
interface IPropsSwitch {
  controlSwitch: string
  controlSide?: string
  controlDisplay?: string
  controlHamburg?: string
}

export const SwitchMenuBurguer = styled.span<IPropsSwitch>`
  z-index: 1000;
  position: fixed;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.mode};
  margin-top: 13rem;

  :before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50px;
    top: 50%;
    transition: all 0.3s ease-in-out;
    left: ${props => (props.controlSwitch === 'light' ? '5px' : '25px')};
    transform: translateY(-50%);
    background-color: ${props => props.theme.colors.shapeLow};
    /* background-color: red; */
  }
  .switch-moon {
    content: '';
    position: absolute;
    font-size: 15px;
    height: 10px;
    width: 10px;
    /* border-radius: 50px; */
    top: 46%;
    transition: all 0.3s ease-in-out;
    left: -33.5px;
    transform: translateY(-50%);
    opacity: ${props => (props.controlSwitch === 'light' ? '100' : '0')};
    color: ${props => props.theme.colors.shape};
  }
  .switch-sun {
    font-size: 15px;
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    /* border-radius: 50px; */
    top: 51%;
    transition: all 0.3s ease-in-out;
    left: -34.4px;
    transform: translateY(-50%);
    opacity: ${props => (props.controlSwitch === 'light' ? '0' : '100')};
    color: ${props => props.theme.colors.shape};
  }
`
