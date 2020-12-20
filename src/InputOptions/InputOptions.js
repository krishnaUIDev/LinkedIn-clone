import React from "react";
import "./InputOptions.css";

const InputOptions = ({ color, title, Icon }) => {
  return (
    <div className="inputOptions">
      <Icon sytle={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
