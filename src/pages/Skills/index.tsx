import React, { useRef, useState } from 'react'
import { DivContainer } from './styled'
import { arrayTechs } from '../../mocks/arrayTechs'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
}

const Skills: React.FC<IProps> = ({ ...rest }) => {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = e => {
    e.preventDefault()
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = e => {
    if (!isDragging) return
    const x = e.pageX - containerRef.current.offsetLeft
    const distance = x - startX
    containerRef.current.scrollLeft = scrollLeft - distance
  }

  return (
    <DivContainer {...rest}>
      <div className="container-techs">
        <h2 className="h2-responsive">Tecnologias</h2>

        <div
          className={'divTechs'}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          {arrayTechs.map((item, index) => (
            <div className="card-techs" key={index}>
              <img src={item.imgTech} />
              <span className="span-title-card-small-responsive">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-info">
        <div className="card-one">
          <span className="img">
            <i className="bx bx-credit-card-front" />
          </span>
          <span className="title-card span-title-card-small-responsive">
            Front-End
          </span>
          <span className="info-card span-card-small-responsive">
            Desenvolvimento de sites responsivos e interativos utilizando
            tecnologias modernas como o React e Next, juntamente com a
            biblioteca Styled Components para estilização.
          </span>
        </div>
        <div className="card-two">
          <span className="img">
            <i className="bx bx-data" />
          </span>
          <span className="title-card span-title-card-small-responsive">
            Back-End
          </span>
          <span className="info-card span-card-small-responsive">
            Desenvolvimento de soluções no lado dos servidores com Node.js e o
            framework typeorm para trabalhar com bancos de dados relacionais e
            arquitetura limpa para criar APIs eficientes e escaláveis.
          </span>
        </div>
        <div className="card-three">
          <span className="img">
            <i className="bx bxs-devices" />
          </span>
          <span className="title-card span-title-card-small-responsive">
            Mobile
          </span>
          <span className="info-card span-card-small-responsive">
            Desenvolvimento de aplicativos móveis interativos utilizando a
            tecnologia React Native, juntamente com a biblioteca Styled
            Components para estilização.
          </span>
        </div>
      </div>
    </DivContainer>
  )
}

export default Skills
