import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

import { Bubbles } from '../components/bubbles/styled'

import IconMenuBurguer from '../components/MenuBurguer'
import Dashboard from './Dashboard'

import Skills from './Skills'
import ProjectsSkills from './ProjectsSkills'
import Contact from './Contact'
import About from './About'
import { test } from '../mocks/bubblesArray'
import useWindowSize from '../hooks/windowSize'

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
        <title>Dashboard</title>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
      </Head>

      {screenWidth <= 800 && (
        <IconMenuBurguer theme={theme} toggleTheme={toggleTheme} />
      )}
      <Container className="container-page">
        <div className="div-bubbles">
          {test.map((item, index) => (
            <Bubbles key={index} sequencia={item} />
          ))}
        </div>
        <Dashboard id="home" />
        <About id="sobre" theme={theme} />

        <Skills id="skills" />
        <ProjectsSkills id="portfolio" controlSide={controlSide} />
        <Contact id="contato" />
      </Container>
    </>
  )
}

export default Home
