import React from "react";
import "./style.css";
import { useLinkClickHandler } from "react-router-dom";

const CustomButton = (props) => {
  //takes outside input and wires up to "dumb" button element
  const handleClick = useLinkClickHandler(props.nextPage);
  // const setPlayerName = (e) => {
  //   setPlayerName("");
  // };
  // const resetPlayerName = setPlayerName(() => "");
  // const handleSubmit = (e) => {
  //   addChart(name);
  //   e.preventDefault();

  return (
    <button
      className="customButton"
      onClick={handleClick}
      // onSubmit={resetPlayerName}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
