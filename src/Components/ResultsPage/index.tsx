import React from "react";
import CustomButton from "../CustomButton";
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
      {/* takes you to first question instead of splashpage - Keeps player name */}
      <CustomButton nextPage="/questionOne">Try Again</CustomButton>

      {/* takes you to splashpage to enter new name*/}
      <CustomButton nextPage="/">Play as New Person</CustomButton>
    </div>
  );
};

export default ResultsPage;
