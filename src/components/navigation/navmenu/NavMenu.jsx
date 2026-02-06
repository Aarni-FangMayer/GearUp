import React from "react";
import NavItem from "./NavItem";
import "./NavMenu.css";

const navLinks = [
  { id: 1, href: "#hero", text: "Главная" },
  { id: 2, href: "#about", text: "О нас" },
  { id: 3, href: "#services", text: "Услуги" },
  { id: 4, href: "#contacts", text: "Контакты" },
];

const NavMenu = () => {
  return (
    <nav className="nav-menu">
      {navLinks.map(link => (
        <NavItem key={link.id} href={link.href} text={link.text} />
      ))}
    </nav>
  );
};

export default NavMenu;
