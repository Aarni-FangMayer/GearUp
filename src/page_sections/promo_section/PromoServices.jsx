import React from "react";
import { useState } from "react";

import Icon from "../../components/ui/icon_item/Icon";
import "./promoServices.css";

import diagnostics from "../../assets/icons/diagnostics.svg";
import oilChange from "../../assets/icons/oil_change.svg";
import tireChange from "../../assets/icons/wheels.svg";
import inspection from "../../assets/icons/inspections.svg";
import detailing from "../../assets/icons/detailing.svg";
import transmission from "../../assets/icons/transmission.svg";
import battery from "../../assets/icons/battery.svg";

const PromoServices = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState("repairs");

  const categories = {
    repairs: {
      title: "Auto Repairs",
      items: [
        { id: 1, name: "Brakes", img: detailing },
        { id: 2, name: "Transmission", img: transmission },
        { id: 3, name: "Engine", img: diagnostics },
        { id: 4, name: "Suspension", img: tireChange },
        { id: 5, name: "Battery", img: battery },
      ],
    },
    services: {
      title: "Auto Services",
      items: [
        { id: 1, name: "Diagnostics", img: diagnostics },
        { id: 2, name: "Oil Change", img: oilChange },
        { id: 3, name: "Tire Change", img: tireChange },
        { id: 4, name: "Inspection", img: inspection },
        { id: 5, name: "Detailing", img: detailing },
      ],
    },
  };

  const items = categories[activeCategory].items;

  return (
    <section className="promo-services" id={id}>
      <div className="promo-services__content secondary-grid">
        <div className="services__categories">
          <div
            className={`services__category ${
              activeCategory === "repairs" ? "services__category--active" : ""
            }`}
            onClick={() => setActiveCategory("repairs")}
          >
            <h3 className="services__category-title">Auto Repairs</h3>+ show all
          </div>
          <div
            className={`services__category ${
              activeCategory === "services" ? "services__category--active" : ""
            }`}
            onClick={() => setActiveCategory("services")}
          >
            <h3 className="services__category-title">Auto Services</h3>+ show
            all
          </div>
        </div>
        <div className="services__content">
          <ul className="services__items">
            {items.map((item) => (
              <li key={item.id}>
                <Icon
                  iconImg={item.img}
                  iconImgAlt={item.name + " icon"}
                  iconText={item.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="promo-services-mobile mobile-grid">
        <div className="repairs-block">
            <h3 className="services__category-title">Auto Repairs</h3>
            <ul className="services__items">
              {categories.repairs.items.map((item) => (
                <li key={item.id}>
                  <Icon
                    iconText={item.name}
                  />
                </li>
              ))}
            </ul>
        </div>
        <div className="services-block">
            <h3 className="services__category-title">Auto Services</h3>
            <ul className="services__items">
              {categories.services.items.map((item) => (
                <li key={item.id}>
                  <Icon
                    iconText={item.name}
                  />
                </li>
              ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default PromoServices;
