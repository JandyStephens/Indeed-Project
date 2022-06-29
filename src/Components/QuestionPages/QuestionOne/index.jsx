import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../../ScoreTracker";
import Button from "../../Button";
import { useLinkClickHandler } from "react-router-dom";

const QuestionOne = (props) => {
  const handleClick = useLinkClickHandler("/questionTwo");
  return (
    <div>
      <MedText>
        <QuestionCounter>1</QuestionCounter>
        <ScoreTracker>{props.tracker}</ScoreTracker>
      </MedText>
      <p>Q1</p>
      <Button onClick={handleClick} buttonText={<p>Submit</p>}></Button>
    </div>
  );
};

export default QuestionOne;
