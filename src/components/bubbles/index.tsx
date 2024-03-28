import React, { ReactNode } from 'react'
import { Bubbles, DivContainer } from './styled'
import { test } from '../../mocks/bubblesArray'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

const BackgroundBubbles: React.FC<IProps> = ({ children, ...rest }) => {
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

export default BackgroundBubbles
