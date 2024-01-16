import React, { useEffect } from 'react'
import Head from 'next/head'
import RocketseatLogo from '../assets/rocketseat.svg'
import { Container, Scroll } from '../styles/pages/Home'
import { Dashboard } from '../components/Dashboard'
import { About } from '../components/About'
import { Carrossel } from '../components/Carrossel'
import { BackgroundBubbles, test } from '../components/bubbles'
import { Bubbles } from '../components/bubbles/styled'
import { ProjectsSkills } from '../components/ProjectsSkills'
import { Form } from '../components/Form'
interface IProps {
  controlSide: string
}

const Home: React.FC<IProps> = ({ controlSide }) => {
  let windowLet
  if (typeof window !== 'undefined') {
    windowLet = window.innerWidth
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
      </Head>

      <Container>
        <div className="div-bubbles">
          {test.map((item, index) => (
            <Bubbles key={index} sequencia={item}></Bubbles>
          ))}
        </div>
        <Dashboard id="inicio" />
        <About id="sobremim" />

        <ProjectsSkills id="ProjectsSkills" controlSide={controlSide} />
        <Form id="Form" />
      </Container>
      {/* <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p> */}
    </>
  )
}

export default Home
