import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  /* gap: 5vh; */
  /* height: 100%; *
  /* height: 80vh; */

  /* .card {
    opacity: 1;
    transition: transform 0.5s ease;
    transform: translateX(99%);
  }

  .card-active {
    transform: translateX(99%);
    opacity: 1;
  } */
  /* Transições personalizadas */

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #c3c4ca;
        cursor: pointer;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: ${props => props.theme.colors.primary};
        transition: background 1s ease-in-out;
      }
    }
  }
`
