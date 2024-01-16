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
    font-size: 16px;
  }


  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    display: flex;
    flex-direction: column;
  }
`
