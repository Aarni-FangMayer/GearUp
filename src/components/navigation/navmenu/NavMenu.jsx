import React from "react";
import NavItem from "./NavItem";
import "./NavMenu.css";

const navLinks = [
  { id: 1, href: "#about", text: "About" },
  { id: 2, href: "#advantages", text: "Why Us" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#contacts", text: "Contacts" },
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
