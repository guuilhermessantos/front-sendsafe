import styled from 'styled-components'

// interface IPropsHome {
//   // controlSwitch: string
//   // controlSide?: string
// }

export const DivBurguer = styled.div`
  position: sticky;
  top: 5px;
  z-index: 100;
  width: 30px;
  height: 30px;
  padding: 2px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.arrow};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 30px ${props => props.theme.colors.primary};
  backdrop-filter: blur(20px);
  border-radius: 10px;
  /* margin-top: 10px; */
  margin-left: 5px;
`
