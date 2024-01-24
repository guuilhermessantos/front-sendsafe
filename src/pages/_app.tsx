import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
// import 'boxicons'
// import 'boxicons/css/boxicons.min.css'
// import { register } from 'swiper/element/bundle'
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
// import 'swiper/modules/effect-coverflow/effect-coverflow.min.css'
// import 'swiper/modules/navigation/navigation.min.css'
// import 'swiper/css/navigation'
// import 'swiper/modules/navigation/navigation.scss'
// import 'swiper/modules/effect-coverflow/effect-coverflow.min.css'
// import 'swiper/modules/pagination/pagination.min.css'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'

import GlobalStyle from '../styles/global'
import themeLight from '../styles/themeLight'
import { Navbar } from '../components/navbar'
import themeDark from '../styles/themeDark'
import { Container, Main } from './App'
import { test } from '../components/bubbles'
import { Bubbles } from '../components/bubbles/styled'
import { useMediaQuery } from '@geist-ui/react'
import { AlignCenter } from '@geist-ui/react-icons'
import { MenuBurguer } from '../components/MenuBurguer'
// register()
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const isXS = useMediaQuery('xs')
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
            />
          </Main>
        </Container>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
