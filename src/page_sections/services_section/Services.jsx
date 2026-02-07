import React from "react";
import ServiceCard from "../../components/cards/service_card/ServiceCard";
import Button from "../../components/buttons/base_button/Button";

import "./services.css";

import image1 from "../../assets/img/cards_img/diagnostics.jpg";
import image2 from "../../assets/img/cards_img/oil_change.jpg";
import image3 from "../../assets/img/cards_img/tire_service.jpg";
import image4 from "../../assets/img/cards_img/brake_service.jpg";
import image5 from "../../assets/img/cards_img/battery_service.jpg";
import image6 from "../../assets/img/cards_img/engine_repair.jpg";
import image7 from "../../assets/img/cards_img/heating.jpg";
import image8 from "../../assets/img/cards_img/vehicle_inspection.jpg";

const Services = ({ id }) => {
  const cards = [
    {
      id: 1,
      title: "Diagnostics",
      description: "Full computer diagnostics for all vehicle systems",
      price: "from €40",
      image: image1,
    },
    {
      id: 2,
      title: "Oil Change",
      description: "Professional oil and filter replacement to keep your engine running smoothly",
      price: "from €30",
      image: image2,
    },
    {
      id: 3,
      title: "Tire Services",
      description: "Tire replacement, balancing, and alignment for safe and comfortable driving",
      price: "from €25",
      image: image3,
    },
    {
      id: 4,
      title: "Brake Service",
      description: "Inspection and replacement of brake pads and discs for maximum safety",
      price: "from €50",
      image: image4,
    },
    {
      id: 5,
      title: "Battery Service",
      description: "Battery testing, replacement, and charging system check",
      price: "from €35",
      image: image5,
    },
    {
      id: 6,
      title: "Engine Repair",
      description: "Comprehensive engine repair and maintenance by experienced specialists",
      price: "from €80",
      image: image6,
    },
    {
      id: 7,
      title: "AC & Heating",
      description: "Air conditioning and heating system diagnostics, refill, and repair",
      price: "from €45",
      image: image7,
    },
    {
      id: 8,
      title: "Vehicle Inspection",
      description: "Complete vehicle inspection to ensure reliability and roadworthiness",
      price: "from €60",
      image: image8,
    },
  ];
  return (
    <section className="services-section" id={id}>
      <div className="services-section__content base-grid">
        <div className="services-section__titles">
          <h2 className="services-section__title">Our Auto Services</h2>
          <div className="services-section__subtitle subtitle">
            Complete care for your vehicle — from diagnostics to detailing
          </div>
        </div>
        <div className="services-section__cardlist">
          {cards.map((card) => (
            <div className="services-section__card" key={card.id}>
              <ServiceCard
                title={card.title}
                description={card.description}
                price={card.price}
                bgImage={card.image}
              />
            </div>
          ))}
        </div>
        <div className="services-section__buttons">
          <Button priority="primary" text="Get Your Car Fixed Today" onClick={()=> console.log("primary clicked")} />
          <p className="services-section__buttons-info subtext">Not sure what you need?  <a className="services-section__buttons-link" href="#">Get free diagnostics</a> </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
