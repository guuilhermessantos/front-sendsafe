import React, { useEffect, useRef, useState } from 'react'

// import { motion } from 'framer-motion'

import { DivContainer } from './styled'

// import img from '../../public/image/parallax.webp'
import { journeyArray } from '../../mocks/journeyArray'
import JourneyCard from '../JourneyCard'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
  theme: string
}

const Journey: React.FC<IProps> = ({ theme }) => {
  // const [ref] = useDragScroll()
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    setIsIOS(
      userAgent.includes('iphone') ||
        userAgent.includes('ipad') ||
        userAgent.includes('ipod')
    )
  }, [])

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
    <DivContainer isIOS={isIOS?.toString()}>
      {/* <div>{isIOS ? 'Está no iOS' : 'Não está no iOS'}</div> */}
      <article className="container journey-area">
        <section
          id="my-journey"
          className="dragscroll"
          style={theme === 'light' ? {} : { backgroundColor: '#ffff' }}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          {journeyArray.map((item, index) => (
            <JourneyCard
              key={index}
              year={item.year}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </section>
      </article>
    </DivContainer>
  )
}

export default Journey
