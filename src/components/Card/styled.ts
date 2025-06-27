import styled from 'styled-components'

export const CardWrapper = styled.div`
  border-radius: 8px;
  background: ${props => props.theme.colors.shape};
  height: 70vh;

  .imgTech {
    width: 2vh;
    height: 2vh;
    border-radius: 0;
  }

  .divTechs {
    position: absolute;
    height: 3vh;
    right: 0.5rem;
    /* border-radius: 0rem; */
    /* width: 100%; */
    display: flex;
    align-items: center;
    padding: 0 1vh;
    justify-content: end;
    gap: 0.2rem;
    /* background-color: rgba(0, 0, 0, 0.4); */
    /* font-size: 23px; */
  }

  .image-container {
    height: 43vh;
    border-radius: 8px 8px 0 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      /* object-fit: cover; */
    }
  }

  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 39%;
    /* background-color: red; */

    padding: 1vh 1rem 1rem;

    .heading {
      .heading__subtitle {
        font-weight: 600;
        color: ${props => props.theme.colors.text};
        font-size: 1rem !important;
        @media screen and (max-width: 1070px) {
          font-size: 0.9 !important;
        }
        @media screen and (max-width: 550px) {
          font-size: 0.97rem !important;
        }
      }
    }

    .details {
      .details__text {
        font-weight: 200;
        /* line-height: 20px; */
        color: ${props => props.theme.colors.textSecondary};
        padding-bottom: 1vh;
        word-spacing: 1px;
        font-size: 0.9rem !important;
        @media screen and (max-width: 1070px) {
          font-size: 0.97rem !important;
        }
        @media screen and (max-width: 550px) {
          font-size: 0.8rem !important;
        }
      }
    }

    a {
      text-decoration: none;
    }
    .github-button {
      /* display: inline-block; */
      height: 2.2rem;
      width: 11rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.arrow};
      text-decoration: none;
      border: 2px solid ${props => props.theme.colors.primary};
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s, border-color 0.3s, color 0.3s;
      cursor: pointer;
      margin-right: 5px; /* Espaçamento entre o ícone e o texto */
      /* gap: 2rem; */

      :hover {
        background-color: ${props => props.theme.colors.primaryHover};
        border-color: ${props => props.theme.colors.primaryHover};
        color: ${props => props.theme.colors.arrow};
      }
      :active {
        background-color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
      }
    }

    .next-line {
      display: inline-block;
    }
  }
`
