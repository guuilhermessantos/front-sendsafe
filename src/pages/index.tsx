import React from 'react'
import Head from 'next/head'

import IconMenuBurguer from '../components/MenuBurguer'
import Dashboard from './Dashboard'

import Skills from './Skills'
import ProjectsSkills from './Projects'
import Contact from './Contact'
import About from './About'
import useWindowSize from '../hooks/windowSize'
import { ContainerIndex } from './styled'
import BackgroundBubbles from '../components/BackgroundBubbles'

interface IProps {
  controlSide: string
  theme: string
  toggleTheme: () => void
}

const Home: React.FC<IProps> = ({ controlSide, theme, toggleTheme }) => {
  const screenWidth = useWindowSize()

  return (
    <>
      <Head>
        <title>Guilherme Santos</title>
        {/* <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" /> */}
      </Head>

      {screenWidth <= 800 && (
        <IconMenuBurguer theme={theme} toggleTheme={toggleTheme} />
      )}
      <ContainerIndex className="container-page">
        <BackgroundBubbles />

        <Dashboard id="home" />
        <About id="sobre" theme={theme} />

        <Skills id="skills" />
        <ProjectsSkills id="portfolio" controlSide={controlSide} />
        <Contact id="contato" />
      </ContainerIndex>
    </>
  )
}

export default Home
