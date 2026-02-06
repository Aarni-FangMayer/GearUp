import React from "react";
import Header from "../../components/navigation/header/Header";
import Button from "../../components/buttons/base_button/Button";

import "./Hero.css";

const Hero = ({ id }) => {
  return (
    <section className="hero-section" id={id}>
      <div className="hero-section__content base-grid ">
        <Header />
        <div className="hero-banner">
          <h1 className="hero-banner__title">Fast & Reliable Auto Service</h1>
          <p className="hero-banner__subtitle">
            Keep your car in top shape with our professional maintenance and
            repair services
          </p>
          <div className="hero-banner__cta-group">
            <div className="hero-banner__cta">
              <Button
                priority="primary"
                text="Book Time Now"
                onClick={() => console.log("primary clicked")}
              />
            </div>
            <div className="hero-banner__cta">
              <Button
                priority="secondary"
                text="View Services"
                onClick={() => console.log("secondary clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
