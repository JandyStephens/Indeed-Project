import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../../ScoreTracker";
import Button from "../../Button";
import { useLinkClickHandler } from "react-router-dom";

const QuestionTwo = (props) => {
  const handleClick = useLinkClickHandler("/questionThree");
  return (
    <div>
      <MedText>
        <QuestionCounter>2</QuestionCounter>
        <ScoreTracker>{props.tracker}</ScoreTracker>
      </MedText>
      <p>Q2</p>
      <Button onClick={handleClick} buttonText={<p>Submit</p>}></Button>
    </div>
  );
};

export default QuestionTwo;
