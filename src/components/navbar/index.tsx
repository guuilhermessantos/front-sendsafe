import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/dist/client/router'
import useWindowSize from '../../hooks/windowSize'
import { NavContainer, Switch } from './styled'

interface IProps {
  toggleTheme: () => void
  handleControlSideMenu: () => void
  controlSide: string
  theme: string
  toggleHamburg: string
}

const Navbar: React.FC<IProps> = ({
  toggleTheme,
  theme,
  handleControlSideMenu,
  controlSide,
  toggleHamburg
}) => {
  // const router = useRouter()  // logica de ativar itens no menu em construção
  const screenWidth = useWindowSize()
  const [activeIcon, setActiveIcon] = useState('')

  // logica de ativar itens no menu em construção
  // useEffect(() => {
  //   setActiveIcon(router?.asPath?.toString().replace('/#', ''))
  // }, [])

  return (
    <NavContainer
      controlSwitch={theme}
      controlSide={controlSide}
      controlDisplay={screenWidth <= 800 ? 'true' : 'false'}
      controlHamburg={toggleHamburg}
    >
      <header>
        <div className="image-text">
          <a
            href="#home"
            // onClick={() => setActiveIcon('home')}   // logica de ativar itens no menu em construção
          >
            <span className="image-container">
              <span className="background-image">
                <img
                  src={'/image/logo.png'}
                  title="Guilherme Santos"
                  alt="logo"
                />
              </span>
            </span>
            <div className="header-text">
              {controlSide === 'true' && (
                <>
                  <span className="name text">Guilherme Santos</span>
                  <span className="profession text">Full Stack Developer</span>
                </>
              )}
            </div>
          </a>
        </div>

        <i
          className="bx bx-chevron-right toggle"
          onClick={() => handleControlSideMenu()}
        />
        <i
          className="bx bx-chevron-left toggle-left"
          onClick={() => handleControlSideMenu()}
        />
      </header>
      <div className="menu-bar">
        <div className="menu">
          {/* <li className="search-box">
            <i className="bx bx-search icon" />
            <input type="search" placeholder="Search..." />
          </li> */}
          <ul className="menu-links">
            <li className="nav-link">
              <a
                href="#home"
                // onClick={() => setActiveIcon('home')}  logica de ativar itens no menu em construção
                className={activeIcon === 'home' ? 'active' : ''}
              >
                <i className="bx bxs-dashboard icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Início</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a
                href="#sobre"
                // onClick={() => setActiveIcon('sobre')} logica de ativar itens no menu em construção
                className={activeIcon === 'sobre' ? 'active' : ''}
              >
                <i className="bx bx-info-square icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Sobre mim</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a
                href="#skills"
                // onClick={() => setActiveIcon('skills')} logica de ativar itens no menu em construção
                className={activeIcon === 'skills' ? 'active' : ''}
              >
                <i className="bx bx-bar-chart-square icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Habilidades</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a
                href="#portfolio"
                // onClick={() => setActiveIcon('portfolio')} logica de ativar itens no menu em construção
                className={activeIcon === 'portfolio' ? 'active' : ''}
              >
                <i className="bx bx-windows icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Projetos</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a
                href="#contato"
                // onClick={() => setActiveIcon('contato')} logica de ativar itens no menu em construção
                className={activeIcon === 'contato' ? 'active' : ''}
              >
                <i className="bx bx-conversation icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Contato</span>
                )}
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="mode">
            <div className="moon-sun">
              <i className="bx bx-moon icon moon" />

              <i className="bx bx-sun icon sun" />
            </div>
            <span className="mode-text text">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span>
            <div className="toggle-switch" onClick={() => toggleTheme()}>
              <Switch controlSwitch={theme} controlSide={controlSide}>
                <i className="bx bx-moon switch-moon" />

                <i className="bx bx-sun switch-sun" />
              </Switch>
            </div>
          </li>
        </div>
      </div>
    </NavContainer>
  )
}

export default Navbar
