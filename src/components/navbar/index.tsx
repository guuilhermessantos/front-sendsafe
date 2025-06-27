import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
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
  const router = useRouter()
  const screenWidth = useWindowSize()

  return (
    <NavContainer
      controlSwitch={theme}
      controlSide={controlSide}
      controlDisplay={screenWidth <= 800 ? 'true' : 'false'}
      controlHamburg={toggleHamburg}
    >
      <header>
        <div className="image-text">
          <a href="#home">
            <span className="image-container">
              <img
                src={'/assets/confereTag.svg'}
                title="ConfereTag"
                alt="ConfereTag logo"
                style={{ width: 38, height: 38 }}
              />
            </span>
            <div className="header-text">
              {controlSide === 'true' && (
                <>
                  <span className="name text">ConfereTag</span>
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
              <Link href="/Dashboard" passHref legacyBehavior>
                <a className={router.pathname === '/Dashboard' ? 'active' : ''}>
                  <i className="bx bxs-dashboard icon" />
                  {controlSide === 'true' && (
                    <span className="text nav-text">Dashboard</span>
                  )}
                </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/UpdateXML" passHref legacyBehavior>
                <a className={router.pathname === '/UpdateXML' ? 'active' : ''}>
                  <i className="bx bx-barcode-reader icon" />
                  {controlSide === 'true' && (
                    <span className="text nav-text">Atualizar XML</span>
                  )}
                </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/Bipagem" passHref legacyBehavior>
                <a className={router.pathname === '/Bipagem' ? 'active' : ''}>
                  <i className="bx bx-barcode icon" />
                  {controlSide === 'true' && (
                    <span className="text nav-text">Bipagem</span>
                  )}
                </a>
              </Link>
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
            <div
              className="toggle-switch"
              role="button"
              aria-label="Alternar tema"
              tabIndex={0}
              onClick={toggleTheme}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') toggleTheme()
              }}
              style={{
                outline: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Switch controlSwitch={theme}>
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
