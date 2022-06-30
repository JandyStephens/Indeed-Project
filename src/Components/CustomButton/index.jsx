import React from "react";
import "./style.css";
import { useLinkClickHandler } from "react-router-dom";

const CustomButton = (props) => {
  //takes outside input and wires up to "dumb" button element
  const handleClick = useLinkClickHandler(props.nextPage);

  return (
    <button className="customButton" onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default CustomButton;