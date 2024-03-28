import React from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  year
  icon
  desc
}

const JourneyCard: React.FC<IProps> = ({ year, icon, desc }) => {
  return (
    <div className="journey-item">
      <div>
        <h3>{year}</h3>
        <span>{icon}</span>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default JourneyCard
