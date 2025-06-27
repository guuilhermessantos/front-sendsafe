import styled from 'styled-components'

interface IPropsSwitch {
  controlSwitch: string
  controlSide?: string
  controlDisplay?: string
  controlHamburg?: string
}

export const Switch = styled.span<IPropsSwitch>`
  position: relative;
  height: 22px;
  width: 44px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.mode};

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
    font-size: 12px;
    height: 10px;
    width: 10px;
    /* border-radius: 50px; */
    top: 45%;
    transition: all 0.3s ease-in-out;
    left: 6.5px;
    transform: translateY(-50%);
    opacity: ${props =>
      props.controlSide === 'true'
        ? '0'
        : props.controlSwitch === 'light'
        ? '100'
        : '0'};
    color: ${props => props.theme.colors.text};
  }
  .switch-sun {
    font-size: 12px;
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    /* border-radius: 50px; */
    top: 55%;
    transition: all 0.3s ease-in-out;
    left: 27px;
    transform: translateY(-50%);
    opacity: ${props =>
      props.controlSide === 'true'
        ? '0'
        : props.controlSwitch === 'light'
        ? '0'
        : '100'};
    color: ${props => props.theme.colors.text};
  }
`

export const NavContainer = styled.nav<IPropsSwitch>`
  /* position: fixed; */
  /* top: 0;
  left: 0; */
  height: 100vh;
  width: ${props => (props.controlSide === 'true' ? '250px' : '88px')};
  display: ${props =>
    props.controlDisplay === 'true' && props.controlHamburg === 'false'
      ? 'none'
      : ''};
  padding: 10px 14px;
  background-color: ${props => props.theme.colors.shape};
  transition: opacity 0.3s ease-in-out, width 0.3s ease-in-out;

  .text {
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.controlSide === 'true' ? '100' : '0')};
    /* box-shadow: ${props => (props.controlSide === 'true' ? '' : 'none')}; */
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    color: ${props => props.theme.colors.text};
  }
  /* color: black; */

  header {
    position: relative;
    .image-text {
      display: flex;
      align-items: center;
      /* background-color: red; */

      a {
        /* background-color: blue; */
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        border-radius: 6px;
        transition: all 0.4s ease-in-out;
        /* moz-transition: all 0.4s ease-in-out; */
        -o-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.5s ease-in-out;
        img {
          /* background-color: red; */
          width: 40px;
          border-radius: 6px;
          cursor: pointer;
          /* height: 40px; */
          /* background-color: blue; */
        }
        .header-text {
          /* background-color: blue; */
          display: flex;
          flex-direction: column;
          .name {
            font-weight: 600;
          }
          .profession {
            margin-top: -2px;
          }
        }
      }
    }
    .toggle {
      cursor: pointer;
      position: absolute;
      top: 5;
      right: -25px;
      transform: translateY(-50%);
      height: 25px;
      width: 25px;
      background-color: ${props => props.theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${props => props.theme.colors.arrow};
      opacity: ${props => (props.controlSide === 'true' ? '0' : '100')};
      z-index: 1;
    }
    .toggle-left {
      z-index: 1;
      cursor: pointer;
      position: absolute;
      top: 5;
      right: -25px;
      transform: translateY(-50%);
      height: 25px;
      width: 25px;
      background-color: ${props => props.theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: ${props => props.theme.colors.arrow};
      opacity: ${props => (props.controlSide === 'true' ? '100' : '0')};
    }
  }

  .menu-bar {
    /* background-color: red; */
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .mode {
      position: relative;
      background-color: ${props => props.theme.colors.shapeLow};
      border-radius: 6px;
      i {
        position: absolute;
      }
      .moon-sun {
        height: 50px;
        width: 60px;
        display: flex;
        align-items: center;
      }
      .mode-text {
        font-size: 0.95rem;
        @media (max-width: 600px) {
          font-size: 0.85rem;
        }
      }
      .sun {
        opacity: ${props => (props.controlSwitch === 'light' ? '0' : '100')};
        transition: all 0.1s ease-in-out;
      }
      .moon {
        opacity: ${props => (props.controlSwitch === 'light' ? '100' : '0')};
        transition: all 0.1s linear;
      }

      .toggle-switch {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-width: 60px;
        cursor: pointer;
      }
    }
  }

  .image-container {
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    .background-image {
      img {
        /* height: 2rem;
        width: 2rem; */
        background-color: ${props => props.theme.colors.primary};
        box-shadow: 0 0px 10px ${props => props.theme.colors.primary};
        border-radius: 50%;
      }
    }
  }

  li {
    height: 50px;
    margin-top: 10px;
    list-style: none;
    display: flex;
    align-items: center;

    .text {
      font-size: 16px;
      font-weight: 500;
      align-items: center;
      color: ${props => props.theme.colors.text};
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 60px;
      font-size: 20px;
      color: ${props => props.theme.colors.text};
    }

    .active {
      background-image: linear-gradient(
        to right,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.primary}
      );
      box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      .icon {
        color: white;
      }
      .text {
        color: white;
      }
    }

    a {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      text-decoration: none; /* Remove sublinhado */
      color: inherit; /* Mantém a cor padrão do texto */
      border-radius: 6px;
      transition: all 0.4s ease-in-out;
      /* moz-transition: all 0.4s ease-in-out; */
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.5s ease-in-out;
    }

    a:hover {
      background-image: linear-gradient(
        to right,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.primary}
      );
      box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      .icon {
        color: white;
      }
      .text {
        color: white;
      }
    }
  }
  .search-box {
    background-color: ${props => props.theme.colors.shapeLow};
    border-radius: 6px;
    input {
      height: 100%;
      width: 100%;
      outline: none;
      border: none;
      background-color: ${props => props.theme.colors.shapeLow};
      border-radius: 0px 6px 6px 0px;
    }
  }

  @media screen and (max-width: 800px) {
    width: 88px;
    .switch-sun {
      opacity: ${props => (props.controlSwitch === 'light' ? '0' : '100')};
    }
    .switch-moon {
      opacity: ${props => (props.controlSwitch === 'light' ? '100' : '0')};
    }
    .text {
      opacity: 0;
    }

    header {
      .toggle-left {
        opacity: 0;
      }
      .toggle {
        opacity: 0;
      }
    }
  }
`
