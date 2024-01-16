import React, { useEffect, useState } from 'react'
import logo from '../../public/image/logo.png'
import nlwEsports from '../../public/image/nlwEsports.png'
import arrowRight from '../../public/assets/arrow-right.png'

import { test } from '../bubbles'
import { Bubbles } from '../bubbles/styled'
// import { Swiper, SwiperSlide } from "swiper/react";

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper'
// import 'swiper/scss/effect-coverflow'
// import 'swiper/scss/pagination'
// import 'swiper/scss/navigation'
// import { EffectCoverflow, Pagination, Navigation } from 'swiper'
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
  imgProjeto?: string
  imgTecs?: string
  title?: string
  descProjeto?: string
  urlDeploy?: string
  urlRepositorio?: string
}

SwiperCore.use([Navigation, Pagination, EffectCoverflow])

export const CardCarrossel: React.FC<IProps> = ({
  imgProjeto,
  imgTecs,
  title,
  descProjeto,
  urlDeploy,
  urlRepositorio,
  ...rest
}) => {
  return (
    <SwiperSlide>
      <div className="img">
        <img src={imgProjeto} alt="" />
        <div className="div-tecs">
          <i className="bx bxl-react" />
          <i className="bx bxl-nodejs" />
          <i className="bx bxl-tailwind-css"></i>
        </div>
        <div className="div-desc">
          <h4>{title}</h4>

          <span>{descProjeto}</span>
        </div>
        <div className="div-button">
          <a href={urlDeploy} target="_blank" rel="noreferrer">
            <button className="deploy">
              <i className="bx bxs-window-alt" />
              Site
            </button>
          </a>
          <a href={urlRepositorio} target="_blank" rel="noreferrer">
            <button className="git-hub">
              <i className="bx bxl-github" />
              Git hub
            </button>
          </a>
        </div>
      </div>
    </SwiperSlide>
  )
}
