import React from "react";
import Button from "../../components/buttons/base_button/Button";
import ContactsItem from "../../components/ui/contact_item/ContactsItem";

import "./Contacts.css";

import locationIcon from "../../assets/icons/location.svg";
import timeIcon from "../../assets/icons/hours.svg";
import phoneIcon from "../../assets/icons/call-1.svg";
import telIcon from "../../assets/icons/call-2.svg";

const Contacts = ({ id }) => {
  const buttons = [
    {
      priority: "primary",
      text: "Book Now",
      onClick: () => console.log("primary clicked"),
    },
    {
      priority: "secondary",
      text: "(555) 654 86-95",
      icon: <img src={telIcon} alt="phone icon" />,
      onClick: () => console.log("secondary clicked"),
    },
  ];

  const contacts = [
    {
      icon: <img src={locationIcon} alt="location icon" />,
      subtitle: "Location",
      description: "123 Auto Drive, Suite 100",
    },
    {
      icon: <img src={timeIcon} alt="working hours icon" />,
      subtitle: "Hours",
      description: "Mon-Sat: 7AM - 6PM",
    },
    {
      icon: <img src={phoneIcon} alt="phone icon" />,
      subtitle: "Call Us",
      description: "(555) 654 86-95",
    },
  ];
  return (
    <section className="contacts-section" id={id}>
      <div className="contacts-section__container base-grid">
        <div className="contacts-section__text">
          <h2 className="contacts-section__title">
            Ready to Get Your Car Serviced?
          </h2>
          <div className="contacts-section__subtitle subtitle">
            Schedule your appointment today and experience the GearUp
            difference. Same-day service available for most repairs.
          </div>
          <div className="contacts-section__buttons">
            {buttons.map((btn, index) => (
              <div className="contacts-section__button">
                <Button
                  key={index}
                  priority={btn.priority}
                  text={btn.text}
                  icon={btn.icon}
                  onClick={btn.onClick}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="contacts-section__contacts">
          {contacts.map((item, index) => (
            <ContactsItem
              key={index}
              icon={item.icon}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
