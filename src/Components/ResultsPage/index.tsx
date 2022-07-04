import React from "react";
import "../../style.css";
import CustomButton from "../CustomButton";

const ResultsPage = (props) => {
  return (
    <div>
      <p>
        {props.playerName}, you got {props.finalScore} out of 5 questions right!
      </p>
      <br />
      <p>
        Your best score so far was [x] out of 5 questions which you got
        on[date].
      </p>
      <CustomButton nextPage="/question1">Try Again</CustomButton>
      <CustomButton nextPage="/" onClick={props.resetName}>
        Play as New Person
      </CustomButton>
    </div>
  );
};

export default ResultsPage;
