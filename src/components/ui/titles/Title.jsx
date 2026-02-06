import React from 'react'
import './title.css'

const Title = ({ titleText, subtitleText}) => {
  return (
    <div className='title-group'>
      <h3 className='title-group__title'>{titleText}</h3>
      <div className="subtitle">{subtitleText}</div>
    </div>
  )
}

export default Title

/*
use example:
<Title titleText="About GearUp" subtitleText="Professional auto service you can trust" />
*/
