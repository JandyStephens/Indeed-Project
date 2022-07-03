import React from "react";
import "../../style.css";

const ResultsPage = (props) => {
  return (
    <div>
      <p className="resultsText">
        {props.playerName}, you got {props.finalScore} out of 5 questions right!
        <br />
        Your best score so far was [x] out of 5 questions which you got on
        [date].
      </p>
    </div>
  );
};

export default ResultsPage;
