import React from "react";
import { Link } from "react-router-dom";
import NavMenu from "../navmenu/NavMenu";
import Button from "../../buttons/base_button/Button";
import "./header.css";

import logo from "../../../assets/icons/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-group">
        <img className="logo-image" src={logo} alt="GearUp Logo" />
        <p className="logo-text">GearUp</p>
      </Link>
      <NavMenu />

      <div className="header-button">
        <Button
          priority="primary"
          text="Book Time Now"
          onClick={() => console.log("primary clicked")}
        />
      </div>
    </div>
  );
};

export default Header;
