import React from "react";
import "./navitem.css";

const NavItem = ({ text, href }) => {
  return (
    <a className="nav-item subtext" href={href}>
      {text}
    </a>
  );
};

export default NavItem;
