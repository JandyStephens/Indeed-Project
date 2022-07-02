import React from "react";
import "../../style.css";

const ScoreTracker = (props) => {
  return <div className="scoreTracker">Score: {props.children}</div>;
};

export default ScoreTracker;
