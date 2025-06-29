import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;


::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 3px black; */
  /* border-radius: 5px; */
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.primary};
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.primary};
}
  }

  html {
    font-size: 100%;
    width: 100%;
    @media (max-width: 600px) {
      font-size: 87.5%; /* 14px base */
    }
    @media (max-width: 400px) {
      font-size: 75%; /* 12px base */
    }
  }

  .h1-responsive {
    font-size: 3rem !important;
    @media screen and (max-width: 550px) {
      font-size: 1.5rem !important;
    }
  }
  .h2-responsive {
    font-size: 1.5rem !important;
    @media screen and (max-width: 550px) {
      font-size: 1rem !important;
    }
  }
  .span-responsive {
    font-size: 0.9rem !important;
    @media screen and (max-width: 1070px) {
      font-size: 0.97rem !important;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.85rem !important;
    }
  }
  .span-title-card-small-responsive {
    font-size: 0.85rem !important;
    @media screen and (max-width: 550px) {
      font-size: 0.75rem !important;
    }
  }
  .span-card-small-responsive {
    font-size: 0.85rem !important;
    @media screen and (max-width: 550px) {
      font-size: 0.75rem !important;
    }
  }


  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      font-size: 14px;
    }
    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
`
