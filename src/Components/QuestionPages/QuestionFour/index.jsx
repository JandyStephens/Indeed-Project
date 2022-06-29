import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../../ScoreTracker";
import Button from "../../Button";
import { useLinkClickHandler } from "react-router-dom";

const QuestionFour = (props) => {
  const handleClick = useLinkClickHandler("/questionFive");
  return (
    <div>
      <MedText>
        <QuestionCounter>4</QuestionCounter>
        <ScoreTracker>{props.tracker}</ScoreTracker>
      </MedText>
      <p>Q4</p>
      <Button onClick={handleClick} buttonText={<p>Submit</p>}></Button>
    </div>
  );
};

export default QuestionFour;
