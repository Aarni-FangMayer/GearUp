import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

import logo from "../../assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container base-grid">
        <Link to="/" className="footer__logo-group logo-group">
          <img className="logo-image" src={logo} alt="GearUp Logo" />
          <p className="logo-text">GearUp</p>
        </Link>
        <div className="footer__content">
          <p className="footer__slogan">
            Your trusted partner for all automotive service and repair needs.
            Quality work, fair prices, and honest service since 2009.
          </p>
          <p className="footer__copyrights">
            © {new Date().getFullYear()} GearUp Service. All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/terms" target="_blank" className="footer-link__terms">
            Terms of Service
          </Link>
          <Link to="/policy" target="_blank" className="footer-link__policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
