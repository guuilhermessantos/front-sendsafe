import React, { Dispatch, SetStateAction, useState } from 'react'
import { DivBurguer, SwitchMenuBurguer } from './styled'
import { AlignCenter } from '@geist-ui/react-icons'
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setToggle?: Dispatch<SetStateAction<boolean>>
  toggle?: boolean
  theme: string
  toggleTheme: () => void
}

const IconMenuBurguer: React.FC<IProps> = ({ toggleTheme, theme }) => {
  const [visible, setVisible] = useState(false)

  const visibleHandler = () => {
    setVisible(!visible)
  }
  return (
    <DivBurguer onClick={visibleHandler}>
      <AlignCenter />
      {visible && (
        <>
          <div className="before" />
          <div
            className="menuBurguer"
            onMouseLeave={() => setVisible(false)}
            /*  className={props.num === 7 ? "last-prop" : props.num === 6 ? "beforeLast-prop" : ""} */
          >
            <a href="#home">
              <p>
                <i className="bx bxs-dashboard icon" />
                <span>Início</span>
              </p>
            </a>
            <a href="#sobre">
              <p>
                <i className="bx bx-barcode-reader icon" />
                <span className="text nav-text">Atualiza XML</span>
              </p>
            </a>
            <a href="#skills"></a>
            <a href="#portfolio"></a>
            <a href="#contato"></a>
            <p>
              <div
                className="toggle-switch-menu-burguer"
                onClick={() => toggleTheme()}
              >
                <SwitchMenuBurguer
                  controlSwitch={theme}
                  onClick={() => setVisible(false)}
                >
                  <i className="bx bx-moon switch-moon" />

                  <i className="bx bx-sun switch-sun" />
                </SwitchMenuBurguer>
              </div>
            </p>
          </div>
        </>
      )}
    </DivBurguer>
  )
}
export default IconMenuBurguer
