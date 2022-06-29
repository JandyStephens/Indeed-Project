import React from "react";
import "./style.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
};

export default Button;
