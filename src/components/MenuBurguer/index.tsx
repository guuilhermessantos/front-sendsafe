import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { DivBurguer } from './styled'
import { AlignCenter } from '@geist-ui/react-icons'
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  setToggle?: Dispatch<SetStateAction<boolean>>
  toggle?: boolean
}

export const MenuBurguer: React.FC<IProps> = ({
  setToggle,
  toggle,
  ...rest
}) => {
  return (
    <DivBurguer onClick={() => setToggle(!toggle)}>
      <AlignCenter />
    </DivBurguer>
  )
}
