import React from "react";
import "./style.css";

const QuestionCounter = (props) => {
  return <p className="questionCounter">Question {props.children} of 5</p>;
};

export default QuestionCounter;
