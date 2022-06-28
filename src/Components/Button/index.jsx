import React from "react";
import "./style.css";

const Button = (props) => {
  return <div className="button">{props.children}</div>;
};

export default Button;
