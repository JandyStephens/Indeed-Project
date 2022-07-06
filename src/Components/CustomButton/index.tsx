import React from "react";
import "../../style.css";
import { useLinkClickHandler } from "react-router-dom";

const CustomButton = (props) => {
  //takes outside input and wires up to "dumb" button element
  const goToNextPage = useLinkClickHandler(props.nextPage);

  function handleClick(event) {
    //runs whatever function is passed through onClick
    props.onClick?.(event);
    //runs goToNextPage function - requires event
    goToNextPage(event);
  }

  return (
    <button
      className="styleButton"
      onClick={handleClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
