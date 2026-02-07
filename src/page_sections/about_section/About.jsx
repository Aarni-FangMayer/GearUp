import React from "react";
import "./About.css";
import aboutImage from "../../assets/img/about_image.jpg";

import Highlight from "../../components/ui/highlight_item/Highlight";
import Button from "../../components/buttons/base_button/Button";

const About = ({ id }) => {
  return (
    <section className="about-section" id={id}>
      <div className="about-section__content base-grid">
        <img
          className="about-section__image"
          src={aboutImage}
          alt="Changing car oil"
        />
        <div className="about-section__text">
          <div className="about-section__titles">
            <h2 className="about-section__title">About GearUp</h2>
            <div className="about-section__subtitle subtitle">
              Professional auto service you can trust
            </div>
          </div>
          <p className="about-section__description">
            GearUp is a full-service auto repair shop built on precision,
            expertise, and transparency. We combine skilled technicians with
            advanced diagnostics to deliver reliable results without unnecessary
            work.{" "}
          </p>
          <div className="about-section__highlits">
            <Highlight number="15+" text="Years Experience" />
            <Highlight number="34" text="Services Available" />
            <Highlight number="100%" text="Satisfaction Guaranteed" />
          </div>
          <div className="about-section__button">
            <Button
              priority="primary"
              text="See All Services"
              onClick={() => {
                const el = document.getElementById("services");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
