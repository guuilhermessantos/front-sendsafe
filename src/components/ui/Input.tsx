import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  background: ${props => props.theme.colors.shape};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: border 0.2s;
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    outline: none;
  }
`

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = props => <StyledInput {...props} />

export default Input
