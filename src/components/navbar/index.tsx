import React, { useEffect, useState } from 'react'
import { NavContainer, Switch } from './styled'
import logo from '../../public/image/logo.png'
import arrowRight from '../../public/assets/arrow-right.png'
import { useMediaQuery } from '@geist-ui/react'

interface IProps {
  toggleTheme: () => void
  handleControlSideMenu: () => void
  controlSide: string
  theme: string
  toggleHamburg: string
}

export const Navbar: React.FC<IProps> = ({
  toggleTheme,
  theme,
  handleControlSideMenu,
  controlSide,
  toggleHamburg
}) => {
  // const windowWidth = useRef(window.innerWidth)
  const isXS = useMediaQuery('xs')

  return (
    <NavContainer
      controlSwitch={theme}
      controlSide={controlSide}
      controlDisplay={isXS ? 'true' : 'false'}
      controlHamburg={toggleHamburg}
    >
      <header>
        <div className="image-text">
          <a href="#inicio">
            <span className="image-container">
              <span className="background-image">
                <img src={logo} title="Guilherme Santos" alt="logo" />
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
              <a href="#inicio">
                <i className="bx bx-home-alt icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Início</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a href="#sobremim">
                <i className="bx bx-bar-chart-alt-2 icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Sobre mim</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a href="#ProjectsSkills">
                <i className="bx bx-bell icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Skills</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a href="#Form">
                <i className="bx bx-bar-chart-alt icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Análise</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-heart icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Likes</span>
                )}
              </a>
            </li>
            <li className="nav-link">
              <a href="#">
                <i className="bx bx-wallet icon" />
                {controlSide === 'true' && (
                  <span className="text nav-text">Carteiras</span>
                )}
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          {/* <li className="nav-link">
            <a href="#">
              <i className="bx bx-log-out icon" />
              <span className="text nav-text">Logout</span>
            </a>
          </li> */}
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
