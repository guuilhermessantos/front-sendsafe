import React from 'react'

import Carousel from '../../components/Carousel'
import DivContainer from './styled'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sla?: string
  controlSide: string
}

const ProjectsSkills: React.FC<IProps> = ({ ...rest }) => {
  return (
    <DivContainer {...rest}>
      <div className="card-container">
        <h2 className="h2-responsive">Projetos</h2>
        <Carousel />
      </div>
    </DivContainer>
  )
}

export default ProjectsSkills
