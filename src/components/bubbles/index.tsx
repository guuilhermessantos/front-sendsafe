import React, { ReactNode, useEffect, useState } from 'react'
import logo from '../../public/image/logo.png'
import arrowRight from '../../public/assets/arrow-right.png'
import { Bubbles, DivContainer } from './styled'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}
export const test = [72, 12, 54, 23, 13, 32, 63, 72]
export const BackgroundBubbles: React.FC<IProps> = ({ children, ...rest }) => {
  // const { innerWidth: width, innerHeight: height } = window
  return (
    <DivContainer {...rest}>
      {children}
      <div className="div-bubbles">
        {test.map((item, index) => (
          <Bubbles key={index} sequencia={item}></Bubbles>
        ))}
      </div>
    </DivContainer>
  )
}
