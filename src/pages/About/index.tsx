import React from 'react'

// import { motion } from 'framer-motion'

import Journey from '../../components/Journey'
import DivContainer from './styled'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
  theme: string
}

const About: React.FC<IProps> = ({ theme, ...rest }) => {
  // const [ref] = useDragScroll()
  // const containerRef = useRef(null)
  // const [isDragging, setIsDragging] = useState(false)
  // const [startX, setStartX] = useState(0)
  // const [scrollLeft, setScrollLeft] = useState(0)

  // const handleMouseDown = e => {
  //   e.preventDefault()
  //   setIsDragging(true)
  //   setStartX(e.pageX - containerRef.current.offsetLeft)
  //   setScrollLeft(containerRef.current.scrollLeft)
  // }

  // const handleMouseUp = () => {
  //   setIsDragging(false)
  // }

  // const handleMouseMove = e => {
  //   if (!isDragging) return
  //   const x = e.pageX - containerRef.current.offsetLeft
  //   const distance = x - startX
  //   containerRef.current.scrollLeft = scrollLeft - distance
  // }
  return (
    <DivContainer {...rest}>
      <div className="card-about">
        <h2 className="h2-responsive">Sobre Mim</h2>

        <div className="info-container">
          {/* <div className="card-info">
            Bem-vindo ao meu mundo! Sou um desenvolvedor full stack apaixonado
            por criar soluções inovadoras e funcionais. Estou aqui para
            transformar necessidades em experiências excepcionais.
          </div> */}
          <span className="span-responsive">
            Sou um desenvolvedor full stack apaixonado por criar soluções
            inovadoras e funcionais. Estou aqui para transformar necessidades em
            experiências excepcionais. e meu objetivo é criar experiências
            digitais que não apenas impressionem, mas também funcionem de forma
            excepcional e agreguem valor a negócios e projetos ao redor do
            mundo.
          </span>
        </div>
      </div>
      <div className="card-journey">
        <h2 className="h2-responsive">Jornada</h2>

        <Journey theme={theme} />
      </div>
    </DivContainer>
  )
}
export default About
