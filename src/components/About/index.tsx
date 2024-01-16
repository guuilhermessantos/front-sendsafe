import React, { useEffect, useState } from 'react'
import logo from '../../public/image/logo.png'
import arrowRight from '../../public/assets/arrow-right.png'
import { DivContainer } from './styled'
import { Bubbles } from '../bubbles/styled'
import { test } from '../bubbles'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
}

export const About: React.FC<IProps> = ({ ...rest }) => {
  return (
    <DivContainer {...rest}>
      <div className="card-about-info">
        <h2>Sobre mim</h2>
        <div className="div-conteudo">
          <div className="div-img"></div>

          <div className="div-info"></div>
        </div>
      </div>
    </DivContainer>
  )
}
