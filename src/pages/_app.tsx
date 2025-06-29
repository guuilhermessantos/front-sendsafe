import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import themeLight from '../styles/themeLight'
import themeDark from '../styles/themeDark'
import { Main, Container } from './styled'
import 'pure-react-carousel/dist/react-carousel.es.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Navbar from '../components/navbar'
import IconMenuBurguer from '../components/MenuBurguer'
import useWindowSize from '../hooks/windowSize'

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
  const screenWidth = useWindowSize()

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
        <ToastContainer theme={theme === 'light' ? 'colored' : 'dark'} />
        <Container>
          {screenWidth <= 800 && (
            <IconMenuBurguer theme={theme} toggleTheme={toggleTheme} />
          )}
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
