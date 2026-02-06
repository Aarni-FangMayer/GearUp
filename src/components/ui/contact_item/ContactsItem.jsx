import React from 'react'
import "./contactsItem.css"

const ContactsItem = ({ icon, subtitle, description }) => {
  return (
    <div className='contacts-item'>
      <div className="contacts-item__img">{icon}</div>
      <div className="contacts-item__text">
        <div className="text-content__subtitle">{subtitle}</div>
        <div className="text-content__description">{description}</div>
      </div>
    </div>
  )
}

export default ContactsItem

/*
use example:
      <ContactsItem 
        icon={<img src={Location} alt="location icon" />}
        subtitle="Location"
        description="123 Auto Drive, Suite 100"
      />
*/