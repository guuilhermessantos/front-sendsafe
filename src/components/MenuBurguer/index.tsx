import React, { useState, useRef, useEffect } from 'react'
import {
  DivBurguer,
  BurgerButton,
  SideMenu,
  Backdrop,
  SwitchMenuBurguer
} from './styled'
import Link from 'next/link'
import Button from '../ui/Button'
import { useRouter } from 'next/router'
import { FiLogOut, FiUser } from 'react-icons/fi'

interface IProps {
  theme: string
  toggleTheme: () => void
}

const IconMenuBurguer: React.FC<IProps> = ({ toggleTheme, theme }) => {
  const [visible, setVisible] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const burgerButtonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const [userName, setUserName] = useState('')

  // Fecha o menu ao clicar fora (mas não no botão)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        burgerButtonRef.current &&
        !burgerButtonRef.current.contains(event.target as Node)
      ) {
        setVisible(false)
      }
    }
    if (visible) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserName(localStorage.getItem('nome') || '')
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('nome')
    router.push('/login')
  }

  return (
    <>
      <DivBurguer>
        <BurgerButton
          ref={burgerButtonRef}
          aria-label={visible ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={visible}
          aria-controls="side-menu"
          tabIndex={0}
          onClick={() => setVisible(v => !v)}
          className={visible ? 'open' : ''}
        >
          <span />
          <span />
          <span />
        </BurgerButton>
      </DivBurguer>
      {visible && <Backdrop onClick={() => setVisible(false)} />}
      <SideMenu ref={menuRef} id="side-menu" className={visible ? 'open' : ''}>
        <nav>
          <Link href="/Dashboard" passHref legacyBehavior>
            <a tabIndex={visible ? 0 : -1} onClick={() => setVisible(false)}>
              <i className="bx bxs-dashboard icon" /> Dashboard
            </a>
          </Link>
          <Link href="/UpdateXML" passHref legacyBehavior>
            <a tabIndex={visible ? 0 : -1} onClick={() => setVisible(false)}>
              <i className="bx bx-barcode-reader icon" /> Atualizar XML
            </a>
          </Link>
          <Link href="/Bipagem" passHref legacyBehavior>
            <a tabIndex={visible ? 0 : -1} onClick={() => setVisible(false)}>
              <i className="bx bx-barcode icon" /> Bipagem
            </a>
          </Link>
          <div className="toggle-theme">
            <span className="theme-label">Tema</span>
            <SwitchMenuBurguer
              controlSwitch={theme}
              onClick={toggleTheme}
              tabIndex={visible ? 0 : -1}
            >
              <i className="bx bx-moon switch-moon" />
              <i className="bx bx-sun switch-sun" />
            </SwitchMenuBurguer>
          </div>
          <Button
            style={{
              width: '100%',
              marginTop: 16,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              justifyContent: 'center',
              fontWeight: 500,
              fontSize: 16
            }}
            onClick={handleLogout}
          >
            <FiUser style={{ marginRight: 4 }} />
            <span>{userName || 'Usuário'}</span>
            <FiLogOut style={{ marginLeft: 8 }} />
          </Button>
        </nav>
      </SideMenu>
    </>
  )
}
export default IconMenuBurguer
