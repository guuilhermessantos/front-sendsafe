import React, { useEffect, useState } from 'react'
import logo from '../../public/image/logo.png'
import arrowRight from '../../public/assets/arrow-right.png'
import { DivContainer } from './styled'
import { Bubbles } from '../bubbles/styled'
import { test } from '../bubbles'
import { Carrossel } from '../Carrossel'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
}

export const Form: React.FC<IProps> = ({ ...rest }) => {
  return <DivContainer {...rest}></DivContainer>
}
