import React from "react";
import "../CustomButton/style.css";

const SubmitButton = (props) => {
  return (
    <button type="submit" className="customButton">
      {props.children}
    </button>
  );
};

export default SubmitButton;