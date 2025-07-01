import React, { useState, useEffect } from 'react'
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
import { useRouter } from 'next/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState('light')
  const [toggle, setToggle] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const [controlSide, setControlSide] = useState('true')
  const handleControlSideMenu = () => {
    setControlSide(controlSide === 'true' ? 'false' : 'true')
  }
  const screenWidth = useWindowSize()
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsAuth(!!localStorage.getItem('token'))
    }
  }, [router.pathname])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'light' || savedTheme === 'dark') setTheme(savedTheme)
    }
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])
  const hideNav =
    router.pathname === '/login' || router.pathname === '/signup' || !isAuth

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
        <ToastContainer theme={theme === 'light' ? 'colored' : 'dark'} />
        <Container>
          {!hideNav && screenWidth <= 800 && (
            <IconMenuBurguer theme={theme} toggleTheme={toggleTheme} />
          )}
          {!hideNav && (
            <Navbar
              theme={theme}
              toggleTheme={toggleTheme}
              toggleHamburg={toggle.toString()}
              handleControlSideMenu={handleControlSideMenu}
              controlSide={controlSide}
            />
          )}
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
