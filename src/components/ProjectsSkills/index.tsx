import React, { useEffect, useState } from 'react'
import logo from '../../public/image/logo.png'
import arrowRight from '../../public/assets/arrow-right.png'
import { DivContainer } from './styled'
import { Bubbles } from '../bubbles/styled'
import { test } from '../bubbles'
import { Carrossel } from '../Carrossel'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
  controlSide: string
}

export const ProjectsSkills: React.FC<IProps> = ({ controlSide, ...rest }) => {
  return (
    <DivContainer {...rest}>
      <Carrossel controlSide={controlSide} />

      <div>
        <h2>Tecnologias e Habilidades</h2>
      </div>
      <div className="footer-info">
        <div className="card-one">
          <span className="img">
            <i className="bx bx-credit-card-front" />
          </span>
          <span className="title-card">Front-End</span>
          <span className="info-card">
            Desenvolvimento de sites responsivos e interativos utilizando
            tecnologias modernas como o React e Next, juntamente com a
            biblioteca Styled Components para estilização.
          </span>
        </div>
        <div className="card-two">
          <span className="img">
            <i className="bx bx-data" />
          </span>
          <span className="title-card">Back-End</span>
          <span className="info-card">
            Desenvolvimento de sites soluções no lado do servidores com Node.js
            e o framework typeorm para trabalhar com bancos de dados relacionais
            e arquitetura limpa para criar APIs eficientes e escaláveis.
          </span>
        </div>
        <div className="card-three">
          <span className="img">
            <i className="bx bxs-devices" />
          </span>
          <span className="title-card">Mobile</span>
          <span className="info-card">
            Desenvolvimento de aplicativos móveis interativos utilizando a
            tecnologia React Native, juntamente com a biblioteca Styled
            Components para estilização.
          </span>
        </div>
      </div>
    </DivContainer>
  )
}
