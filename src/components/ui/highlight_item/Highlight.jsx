import React from "react";
import "./highlight.css";

const Highlight = ({ number, text }) => {
  return (
    <div className="highlight-group">
      <h2 className="highlight-group__number">{number}</h2>
      <div className="highlight-group__text subtext">{text}</div>
    </div>
  );
};

export default Highlight;

/*
use example:
<Highlight number="15+" text="Years Experience" />
*/