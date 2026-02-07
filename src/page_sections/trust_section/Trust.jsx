import React from "react";
import Advantage from "../../components/ui/advantage_item/Advantage";
import Card from "../../components/cards/card/Card";

import "./Trust.css";

import icon from "../../assets/icons/advantage.svg";

const Trust = ({ id }) => {
  const advantages = [
    { id: 1, text: "ASE Certified Technicians" },
    { id: 2, text: "Transparent Pricing" },
    { id: 3, text: "Free Vehicle Inspections" },
    { id: 4, text: "State-of-the-Art Equipment" },
    { id: 5, text: "Warranty on All Repairs" },
    { id: 6, text: "Comfortable Waiting Area" },
  ];

  const cards = [
    {
      id: 1,
      title: "50K+",
      description: "Vehicles Serviced",
      priority: "secondary-card",
    },
    {
      id: 2,
      title: "4.9",
      description: "Customer Rating",
      priority: "secondary-card",
    },
    {
      id: 3,
      title: "24hr",
      description: "Turnaround Time",
      priority: "secondary-card",
    },
    {
      id: 4,
      title: "12mo",
      description: "Parts Warranty",
      priority: "primary-card",
    },
  ];

  return (
    <section className="trust-section" id={id}>
      <div className="trust-section__conteiner base-grid">
        <div className="trust-section__text">
          <h2 className="trust-section__title">
            Why Choose GearUp for Your Vehicle Care
          </h2>
          <p className="trust-section__description">
            With over 15 years of experience serving our community, we've built
            our reputation on honest service, fair prices, and exceptional
            workmanship. Our team treats every vehicle as if it were our own.
          </p>
          <div className="trust-section__advantages">
            {advantages.map((adv) => (
              <Advantage
                key={adv.id}
                icon={<img src={icon} alt="advantage icon" />}
                text={adv.text}
              />
            ))}
          </div>
        </div>
        <div className="trust-section__cards">
          {cards.map((card) => (
            <div className="card-container">
              <Card
                key={card.id}
                priority={card.priority}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
