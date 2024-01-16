import React, { useEffect, useState } from 'react'
import logo from '../../public/image/logo.png'
import nlwEsports from '../../public/image/nlwEsports.png'
import arrowRight from '../../public/assets/arrow-right.png'
import { DivContainer } from './styled'
import { test } from '../bubbles'
import { Bubbles } from '../bubbles/styled'
// import { Swiper, SwiperSlide } from "swiper/react";

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper'
import { CardCarrossel } from '../CardCarrossel'
import { cardsCarrossel } from './utils'
// import 'swiper/scss/effect-coverflow'
// import 'swiper/scss/pagination'
// import 'swiper/scss/navigation'
// import { EffectCoverflow, Pagination, Navigation } from 'swiper'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
  controlSide?: string
}

SwiperCore.use([Navigation, Pagination, EffectCoverflow])

export const Carrossel: React.FC<IProps> = ({ controlSide, ...rest }) => {
  return (
    <DivContainer {...rest} controlSide={controlSide}>
      <h2>Projetos</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        speed={1000}
        autoplay={{
          delay: 3000
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation
        className="swiper_container"
      >
        {cardsCarrossel.map((item, index) => (
          <SwiperSlide key={index}>
            <CardCarrossel
              key={index}
              imgProjeto={item.imgProjeto}
              imgTecs={item.imgTecs}
              title={item.title}
              descProjeto={item.descProjeto}
              urlDeploy={item.urlDeploy}
              urlRepositorio={item.urlRepositorio}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </DivContainer>
  )
}
