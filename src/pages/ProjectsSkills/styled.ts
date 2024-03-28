import styled from 'styled-components'

interface IPropsHome {
  // controlSwitch: string
  controlSide?: string
}

const DivContainer = styled.section<IPropsHome>`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: space-around;
  align-items: center;

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 90%;
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
    backdrop-filter: blur(20px);
    h2 {
      margin-bottom: 2vh;
    }
  }

  /* background-color: blue; */
`
export default DivContainer
