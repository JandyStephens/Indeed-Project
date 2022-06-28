import React from "react";
import "./style.css";

const Button = (props) => {
  return <section className="button">{props.children}</section>;
};

export default Button;
