import React from "react";
import './Button.css'

const Button = ({ priority, text, icon, onClick }) => {
  const className =
    priority === "primary"
      ? "primary"
      : priority === "secondary"
        ? "secondary"
        : "default";

    return <button className={className} onClick={onClick}>{icon} {text}</button>;
};

export default Button;

/*
use example:
<Button priority="primary" text="Primary Button" onClick={()=> console.log("primary clicked")} />
<Button priority="secondary" text="Secondary Button" onClick={()=> console.log("secondary clicked")} />
*/
