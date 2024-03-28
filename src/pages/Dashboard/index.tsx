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
              href="https://wa.me/+5511958520407?text=Olá%20Guilherme,%20tudo%20bem?%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20com%20você."
              aria-label="Mandar mensagem no Whatsapp"
              target="_blank"
              rel="noreferrer"
              title="Enviar mensagem via WhatsApp"
            >
              <img src="/assets/whatsIcon.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-santos-652b49174/"
              aria-label="Visite meu Linkedin"
              target="_blank"
              rel="noreferrer"
              title="Visite meu Linkedin"
            >
              <img src="/assets/linkedinIcon.svg" alt="" />
            </a>
            <a
              href="https://github.com/guuilhermessantos"
              aria-label="Visite meu Github"
              target="_blank"
              rel="noreferrer"
              title="Visite meu Github"
            >
              <img src="/assets/githubIcon.svg" alt="" />
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
