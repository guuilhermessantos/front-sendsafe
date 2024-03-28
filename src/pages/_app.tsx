import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import themeLight from '../styles/themeLight'
import themeDark from '../styles/themeDark'
import { Main, Container } from './styled'
import 'pure-react-carousel/dist/react-carousel.es.css'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('light')
  const [toggle, setToggle] = useState(false)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const [controlSide, setControlSide] = useState('true')
  const handleControlSideMenu = () => {
    setControlSide(controlSide === 'true' ? 'false' : 'true')
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
        <ToastContainer theme={theme === 'light' ? 'colored' : 'dark'} />
        <Container>
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            toggleHamburg={toggle.toString()}
            handleControlSideMenu={handleControlSideMenu}
            controlSide={controlSide}
          />

          <Main>
            <Component
              {...pageProps}
              controlSide={controlSide}
              setToggle={setToggle}
              toggle={toggle}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </Main>
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
