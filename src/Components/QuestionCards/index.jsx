import React from "react";
import "./style.css";

const QuestionCard = (props) => {
  return <div className="questionCard">{props.children}</div>;
};

export default QuestionCard;
