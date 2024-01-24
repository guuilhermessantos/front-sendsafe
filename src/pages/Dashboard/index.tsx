import React, { ReactNode, useEffect, useState } from 'react'
import logo from '../../public/image/logo.png'
import arrowRight from '../../public/assets/arrow-right.png'

import { BackgroundBubbles, test } from '../../components/bubbles'
import { Bubbles } from '../../components/bubbles/styled'
import avatar from '../../public/image/avatar.png'
import { DivContainer } from './styled'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  controlSwitch?: string
}

export const Dashboard: React.FC<IProps> = ({ controlSwitch, ...rest }) => {
  return (
    <DivContainer {...rest}>
      {/* <div className="div-bubbles">
        {test.map((item, index) => (
          <Bubbles key={index} sequencia={item}></Bubbles>
        ))}
      </div> */}
      <div className="div-info">
        <div className="info">
          <h1>Olá,</h1>
          <span>
            Meu nome é <span className="text-weight">Guilherme Santos</span>,
            <br />
          </span>
          <span>
            E sou Desenvolvedor Full Stack atualmente atuando com{' '}
            <span className="text-weight">
              Next JS, React JS, React Native, Reducer, Node Js
            </span>
          </span>
          <div className="div-button">
            <a href="#sobremim">
              <button>
                <span className="text-button">Sobre mim</span>
                <i className="bx bxs-down-arrow-circle arrow-down" />
              </button>
            </a>
          </div>
        </div>
        <div className="div-contatos">
          <div className="div-text">
            <span>Contatos:</span>
          </div>
          <div className="div-icon">
            <a
              href="https://www.linkedin.com/in/guilherme-santos-652b49174/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="linkedin">
                <i className="bx bxl-linkedin" />
              </button>
            </a>
            <a
              href="https://github.com/guuilhermessantos"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github">
                <i className="bx bxl-github" />
              </button>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <button className="instagram">
                <i className="bx bxl-instagram" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={avatar} alt="avatar" />
      </div>
    </DivContainer>
  )
}
