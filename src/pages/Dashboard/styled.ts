import styled from 'styled-components'

export const DivContainer = styled.section`
  width: 100%;
  position: relative;

  /* height: 100vh; */
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  /* padding: 10px; */

  /* background-color: red; */
  .div-info {
    width: 100%;
    z-index: 1;
    margin-bottom: 1rem;
    /* margin-left: 2rem; */
    /* background-color: red; */
    /* background-color: ; */
    /* height: 100vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* display: flex;
    align-items: end;
    justify-content: right;
    flex-direction: row; */

    .info {
      /* height: 25vh; */
      position: relative;
      margin-top: 3rem;
      width: 100%;
      border-radius: 10px;
      background-color: transparent;
      /* height: 100%; */
      /* z-index: 1; */
      padding: 3vh;
      box-shadow: 0 2px 30px rgb(0 0 0 / 50%);
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
        /* z-index: 1; */
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
          /* z-index: 1; */
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
    /* z-index: 1; */
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

      a {
        text-decoration: none;
      }
      img {
        cursor: pointer;
        border: 0;
        width: 2.2rem;
        height: 2.5rem;
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
    width: 100%;
    height: 32rem;
    flex-direction: column;
    border-radius: 10px;
    background-color: transparent;

    z-index: 0;
    min-height: 450px;
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(20px);
    .info-table {
      min-height: 400px; /* Define a altura fixa da tabela */
      overflow-y: auto; /* Permite rolagem vertical se o conteúdo ultrapassar a altura */
    }
    img {
      /* z-index: 1; */
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
    flex-direction: column;

    .div-contatos {
      /* margin-top: 1rem; */
    }

    .div-info {
      /* width: 70%; */
      /* background-color: red; */
      /* height: 50vh; */
      /* height: 70%; */
    }

    .right {
      /* background-color: red; */
      width: 100%;
      /* height: 20vh; */
      /* height: 50%; */

      img {
        /* height: 14rem;
        width: 14rem; */
      }
    }
  }
  @media screen and (max-width: 550px) {
    flex-direction: column;

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
      /* height: 42vh !important; */
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
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  background-color: ${props => props.theme.colors?.arrow};
  border-radius: 8px;
  overflow: hidden;
  /* height: 100px; */
  /* min-height: 400px; */
`

export const TableHeader = styled.thead`
  background-color: ${props => props.theme.colors?.primary};
  color: #fff;
`

export const TableHeaderCell = styled.th`
  padding: 12px 15px;
  text-align: left;
  color: white;
  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors?.mode};
`

export const TableCell = styled.td`
  padding: 12px 15px;
  font-size: 14px;
  text-align: left;
  .svg-dl {
    width: 1rem;
    cursor: pointer;
    path {
      color: blue;
    }
  }

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 8px 10px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: space-evenly;
`

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #28a745;
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  &:hover {
    background-color: #218838;
  }
`

export const Label = styled.label`
  background-color: #22c55e;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #16a34a;
  }
`

export const HiddenInput = styled.input`
  display: none;
`
export const FileName = styled.p`
  margin-top: 10px;
  font-size: 0.9rem;
  color: #555;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 100%;
  /* margin: 20px; */
  line-height: 1.5;
  overflow: hidden;

  @media (max-width: 1024px) {
    font-size: 1.125rem;
    padding: 15px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 10px;
  }
`

export const HighlightText = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-right: 8px;

  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`

export const NormalText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap; /* Não permite quebras de linha até o final do texto */

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`
