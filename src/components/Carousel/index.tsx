import React, { useState } from 'react'

import { cardsCarrossel } from '../../mocks/arrayCardsCarrossel'
import CarouselSlider from '../CarouselSlider'
// import Draggable from 'react-draggable' //! talves usar
import { CarouselWrapper } from './styled'
import { CarouselProvider } from 'pure-react-carousel'

const Carousel: React.FC = () => {
  const [slideCount, setSlideCount] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const totalSlides = cardsCarrossel.length
  const [direction, setDirection] = useState('right')

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides)
    setDirection('right')
  }

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)
    setDirection('left')
  }

  // const handleDrag = (event, data) => {
  //   const threshold = 100 // Limite de movimento para trocar de slide
  //   if (data.deltaX > threshold) {
  //     handlePrevSlide()
  //   } else if (data.deltaX < -threshold) {
  //     handleNextSlide()
  //   }
  // }

  return (
    <CarouselWrapper className="carousel-container">
      <CarouselProvider
        visibleSlides={slideCount}
        totalSlides={cardsCarrossel.length}
        // step={1}
        currentSlide={currentSlide}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={true}
        isPlaying={isPlaying}
        infinite={true}
      >
        <CarouselSlider
          setSlideCount={setSlideCount}
          setCurrentSlide={setCurrentSlide}
          direction={direction}
          setIsPlaying={setIsPlaying}
          handleNextSlide={handleNextSlide}
          handlePrevSlide={handlePrevSlide}
        />
      </CarouselProvider>
    </CarouselWrapper>
  )
}

export default Carousel
