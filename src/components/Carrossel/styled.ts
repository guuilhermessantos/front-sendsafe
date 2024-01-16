import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
}

export const DivContainer = styled.section<IPropsHome>`
  z-index: 1;
  width: 100%;
  background-color: transparent;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    margin: 0;
    margin-top: 10px;
  }

  .swiper_container {
    /* height: 40rem; */
    width: 100%;
    padding: 2rem 0;
    position: relative;

    /* z-index: 5; */
  }

  .img {
    background-color: ${props => props.theme.colors.background};
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    img {
      width: 100%;
      height: 55%;
      border-radius: 15px 15px 0px 0px;
    }

    .div-tecs {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;
    }
    .div-desc {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* justify-content: space-AROUND; */
      gap: 1.5rem;
      height: 27%;
      text-align: center;
      /* background-color: red; */

      padding: 0px 10px 0px 10px;
      @media screen and (max-width: 1450px) {
        span {
          font-size: 0.9rem;
        }
      }
    }
    .div-button {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 10%;

      a {
        text-decoration: none;
        button {
          width: 4.5rem;
          height: 1.6rem;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-size: 0.7rem;
          cursor: pointer;
          border-radius: 5px;
          border: 0;
          font-weight: bold;

          background-color: black;
          color: white;
          transition: all 0.4s ease-in-out;
          :hover {
            transition: all 0.4s ease-in-out;
            border-radius: 4em;
            box-shadow: 0 0px 10px ${props => ` ${props.theme.colors.text}`};
          }
          :active {
            transition: all 0.4s ease-in-out;
            box-shadow: 0 0px 70px ${props => ` ${props.theme.colors.text}`};
          }
        }

        .deploy {
          .bxs-window-alt {
            margin-top: 2px;
            font-size: 0.8rem;
          }
        }

        .git-hub {
          .bxl-github {
            margin-top: 2px;
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  .swiper-slide {
    /* height: 50rem; */
    width: ${props => (props.controlSide === 'true' ? '32vw' : '32.2vw')};
    /* width: 22vw; */
    position: relative;
  }

  .swiper-slide .img {
    width: 100%;
    height: 25rem;
    border-radius: 2rem;
    object-fit: cover;

    /* position: relative; */
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    display: none;
  }

  .slider-controler {
    position: relative;
    bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slider-controler .swiper-button-next {
    left: 58% !important;
    transform: translateX(-58%) !important;
  }

  .swiper-button-prev,
  .swiper-button-next {
    /* color: ${props => props.theme.colors.primary}; */
    /* font-size: 2rem; */
    /* background-color: white; */
    background-color: ${props => props.theme.colors.background};
    /* border-radius: 15px; */
    box-shadow: 0 8px 30px rgb(0 0 0 / 50%);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    color: ${props => props.theme.colors.text};
    /* font-size: 2rem; */
    font-size: 1rem;
  }

  .swiper-button-prev:after {
    margin-right: 3px;
  }
  .swiper-button-next:after {
    margin-left: 3px;
  }

  @media screen and (max-width: 990px) {
    .slider-controler .swiper-button-next {
      left: 70% !important;
      transform: translateX(-70%) !important;
    }
  }

  @media screen and (max-width: 450px) {
    .slider-controler .swiper-button-next {
      left: 80% !important;
      transform: translateX(-80%) !important;
    }
  }

  @media screen and (max-width: 990px) {
    .slider-controler .swiper-button-prev {
      left: 30% !important;
      transform: translateX(-30%) !important;
    }
  }

  @media screen and (max-width: 450px) {
    .slider-controler .swiper-button-prev {
      left: 20% !important;
      transform: translateX(-20%) !important;
    }
  }

  @media screen and (max-width: 500px) {
    .swiper_container {
      height: 25rem;
    }
    .swiper-slide {
      width: 7.35rem;
      height: 36rem;
    }
    .swiper-slide .img {
      width: 15rem;
      height: 19rem;
    }
  }

  /* .slider-controler .slider-arrow {
      background: white;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      left: 42%;
      transform: translateX(-42%);
      filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
    } */

  .slider-controler .slider-arrow ion-icon {
    font-size: 2rem;
    color: #222224;
  }

  .slider-controler .slider-arrow::after {
    content: '';
  }

  .swiper-pagination {
    position: relative;
    width: 15rem !important;
    top: 10px;

    /* margin-right */
    span {
      margin-right: 11px;
      border: 1px white solid;
    }
    /* bottom: 1rem; */
    /* gap: 10px; */
  }

  .swiper-pagination .swiper-pagination-bullet {
    filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
  }

  .swiper-pagination .swiper-pagination-bullet-active {
    background: ${props => props.theme.colors.primary};
  }
`
