import React, { useContext, useEffect } from 'react'
import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider,
  CarouselContext
} from 'pure-react-carousel'
import Card from '../Card'

import { cardsCarrossel } from '../../mocks/arrayCardsCarrossel'
import { Wrapper } from './styled'
import useWindowSize from '../../hooks/windowSize'
interface IProps {
  setSlideCount
  setCurrentSlide
  setIsPlaying
  handleNextSlide
  handlePrevSlide
  direction
}

const CarouselSlider: React.FC<IProps> = ({
  setSlideCount,
  setCurrentSlide,
  setIsPlaying,
  handleNextSlide,
  handlePrevSlide,
  direction
}) => {
  const screenWidth = useWindowSize()

  // pure-react-carousel context
  const carouselContext = useContext(CarouselContext)

  useEffect(() => {
    const updateCarouselSlide = slideToBeVisible => {
      const { currentSlide, totalSlides, visibleSlides } = carouselContext.state

      setSlideCount(slideToBeVisible)

      // this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible)
      }
    }

    if (screenWidth < 1088) {
      updateCarouselSlide(1)
    }
    // >= 1088
    if (screenWidth >= 1088) {
      updateCarouselSlide(2)
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext])

  const enter = () => {
    console.log('enter')
    setIsPlaying(false)
  }

  const leave = () => {
    console.log('leave')
    setIsPlaying(true)
  }
  return (
    <Wrapper onMouseEnter={enter} onMouseLeave={leave}>
      <Slider className="slider">
        {cardsCarrossel.map((item, index) => (
          <Slide
            index={index}
            key={`slide-${index}`}
            className={`slide ${
              direction === 'left' ? 'slide-left-enter' : 'slide-right-enter'
            }`}
          >
            <Card
              key={index}
              imgProjeto={item?.imgProjeto}
              title={item.title}
              descProjeto={item.descProjeto}
              urlRepositorio={item.urlRepositorio}
              arrayTechs={item?.arrayTechs}
            />
          </Slide>
        ))}
      </Slider>
      <div className="controls">
        <ButtonBack
          className="btn-arrow reverse-arrow"
          onClick={handlePrevSlide}
        >
          <img src={'/assets/arrow.svg'} />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow" onClick={handleNextSlide}>
          {/* <Arrow /> */}
          <img src={'/assets/arrow.svg'} />
        </ButtonNext>
      </div>
    </Wrapper>
  )
}

export default CarouselSlider
