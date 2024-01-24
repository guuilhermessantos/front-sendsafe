import React, { Dispatch, SetStateAction } from 'react'
import Head from 'next/head'
import RocketseatLogo from '../assets/rocketseat.svg'
import { Container, Scroll } from '../styles/pages/Home'
import { Dashboard } from './Dashboard'
import { About } from './About'
import { Carrossel } from '../components/Carrossel'
import { BackgroundBubbles, test } from '../components/bubbles'
import { Bubbles } from '../components/bubbles/styled'
import { ProjectsSkills } from './ProjectsSkills'
import { Form } from '../components/Form'
import { useMediaQuery } from '@geist-ui/react'
import { MenuBurguer } from '../components/MenuBurguer'
interface IProps {
  controlSide: string
  setToggle?: Dispatch<SetStateAction<boolean>>
  toggle?: boolean
}

const Home: React.FC<IProps> = ({ controlSide, setToggle, toggle }) => {
  // let windowLet
  // if (typeof window !== 'undefined') {
  //   windowLet = window.innerWidth
  // }
  const isXS = useMediaQuery('xs')
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js" />
      </Head>

      {isXS && <MenuBurguer setToggle={setToggle} toggle={toggle} />}
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
