import React from 'react'
import './card.css'

const Card = ({priority, title, description}) => {
const className =
    priority === "primary-card"
      ? "primary-card card"
      : priority === "secondary-card"
        ? "secondary-card card"
        : "default-card card";

        return <div className={className}><h4 className='card-title'>{title}</h4><p className='card-description'>{description}</p></div>;
}

export default Card

/*
use example:
<Card priority="secondary-card" title="12mo" description="Parts Warranty" />
*/