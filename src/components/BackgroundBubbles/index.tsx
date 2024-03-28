import React, { ReactNode } from 'react'
import { Bubbles, DivContainer } from './styled'
import { bubbles } from '../../mocks/bubblesArray'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

const BackgroundBubbles: React.FC<IProps> = ({ ...rest }) => {
  // const { innerWidth: width, innerHeight: height } = window
  return (
    <DivContainer {...rest}>
      {bubbles.map((item, index) => (
        <Bubbles key={index} sequencia={item}></Bubbles>
      ))}
    </DivContainer>
  )
}

export default BackgroundBubbles
