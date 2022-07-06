import React from "react";
import "../../style.css";

const SubmitButton = (props) => {
  return (
    <div className="buttonContainer">
      <button type="submit" className="styleButton" disabled={props.disabled}>
        {props.children}
      </button>
    </div>
  );
};

export default SubmitButton;
