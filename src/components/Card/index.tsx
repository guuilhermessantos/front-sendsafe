import React from 'react'
import { CardWrapper } from './styled'
import { ITechsIconArray } from '../../mocks/arrayTechs'

interface IProps {
  imgProjeto: string
  arrayTechs: ITechsIconArray[]
  title: string
  descProjeto: string
  urlRepositorio: string
}

const Card: React.FC<IProps> = data => {
  return (
    <CardWrapper>
      <div className="image-container">
        <img src={data.imgProjeto} />
      </div>
      <div className="divTechs">
        {data.arrayTechs?.map((item, index) => (
          <img className="imgTech" src={item.imgTech} key={index} />
        ))}
      </div>
      <div className="content">
        <div className="heading">
          <h3 className="heading__subtitle">{data.title}</h3>
        </div>

        <div className="details">
          <p className="details__text">{data.descProjeto}</p>
        </div>

        <a href={data.urlRepositorio} target="_blank" rel="noreferrer">
          <button className="github-button">
            <i className="fab fa-github" />
            Acesse o Repositorio
          </button>
        </a>
      </div>
    </CardWrapper>
  )
}

export default Card
