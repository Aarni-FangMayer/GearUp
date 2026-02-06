import React from 'react'
import './icon.css'

const Icon = ({ iconImg, iconImgAlt, iconText}) => {
  return (
    <div className='icon-group'>
      <div className="icon-group__icon">
        <img src={iconImg} alt={iconImgAlt} />
      </div>
      <div className="icon-group__text subtext">
        {iconText}
      </div>
    </div>
  )
}

export default Icon

/* 
use example:
<Icon iconImg={icon1} iconImgAlt="diagnostics icon" iconText="Diagnostics" />
*/
