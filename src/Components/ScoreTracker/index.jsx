import React from "react";

const ScoreTracker = (props) => {
  return <p className="scoreTracker">Score: {props.children}</p>;
};

export default ScoreTracker;
