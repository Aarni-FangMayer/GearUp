import React from "react";
import { Link } from "react-router-dom";
import NavItem from "../navmenu/NavItem";

import './burgerButton.css'

const navLinks = [
  { id: 1, href: "#about", text: "About" },
  { id: 2, href: "#advantages", text: "Why Us" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#contacts", text: "Contacts" },
];

const BurgerButton = ({ isOpen, toggleMenu }) => {
  return (
    <div className="burger-wrapper">
      <button className="burger" onClick={toggleMenu}>
        ☰
      </button>

      {isOpen && (
        <div className="mobile-menu">
          <button className="close-menu" onClick={toggleMenu}>
            ×
          </button>

          {navLinks.map((link) => (
            <NavItem
              key={link.id}
              href={link.href}
              text={link.text}
              onClick={toggleMenu}
            />
          ))}
        </div>
      )}
    </div>
  )
}

  export default BurgerButton;