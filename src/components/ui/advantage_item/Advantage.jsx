import React from 'react'
import './advantage.css'

const Advantage = ({ icon, text }) => {
  return (
    <div className="advantage-row">
      <div className="advantage-row__icon">{icon}</div>
      <p className="advantage-row__text">{text}</p>
    </div>
  )
}

export default Advantage