import React from 'react'
import { DivContainer } from './styled'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  controlSwitch?: string
}

const Dashboard: React.FC<IProps> = ({ ...rest }) => {
  return (
    <DivContainer {...rest}>
      {/* <div className="div-bubbles">
        {test.map((item, index) => (
          <Bubbles key={index} sequencia={item}></Bubbles>
        ))}
      </div> */}
      <div className="div-info">
        <div className="info">
          <h1 className="h1-responsive">Olá,</h1>
          <span className="span-responsive">
            Meu nome é{' '}
            <span className="text-weight span-responsive">
              Guilherme Santos
            </span>
            ,
            <br />
          </span>
          <span className="span-responsive">
            E sou Desenvolvedor Full Stack atualmente atuando com{' '}
            <span className="text-weight span-responsive">
              Next JS, React JS, React Native, Reducer, Node Js
            </span>
          </span>
          <div className="div-button">
            <a href="#sobre">
              <button>
                <span className="text-button span-responsive">Sobre mim</span>
                <i className="bx bxs-down-arrow-circle arrow-down" />
              </button>
            </a>
          </div>
        </div>
        <div className="div-contatos">
          <div className="div-text">
            <span className="span-responsive">Contato:</span>
          </div>
          <div className="div-icon">
            <a
              href="https://www.linkedin.com/in/guilherme-santos-652b49174/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="linkedin">
                <i className="bx bxl-linkedin" />
              </button>
            </a>
            <a
              href="https://github.com/guuilhermessantos"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github">
                <i className="bx bxl-github" />
              </button>
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <button className="instagram">
                <i className="bx bxl-instagram" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="right">
        <img src={'/image/avatar.png'} alt="avatar" />
      </div>
    </DivContainer>
  )
}

export default Dashboard
