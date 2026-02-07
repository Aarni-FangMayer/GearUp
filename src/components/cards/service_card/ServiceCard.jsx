import React from 'react';
import "./serviceCard.css";

const ServiceCard = ({ title, description, price, bgImage }) => {
  return (
    <div
      className="service-card"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="service-card-overlay">
        <p className="service-card-title">{title}</p>
        <p className="service-card-description subtext">{description}</p>
        <p className="service-card-price">{price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;