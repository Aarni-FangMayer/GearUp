import React, { useState } from "react";
import { Link } from "react-router-dom";

import BurgerButton from "./BurgerButton";

import "./mobilemenu.css";

import logo from "../../../assets/icons/logo.png";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="mobile-header mobile-grid">
      <Link to="/" className="logo-mobile-group">
        <img className="logo-mobile-image" src={logo} alt="GearUp Logo" />
        <p className="logo-mobile-text">GearUp</p>
      </Link>
      <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default MobileMenu;
