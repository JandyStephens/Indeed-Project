import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../../ScoreTracker";
import Button from "../../Button";
import { useLinkClickHandler } from "react-router-dom";

const QuestionFive = (props) => {
  const handleClick = useLinkClickHandler("/resultsPage");
  return (
    <div>
      <MedText>
        <QuestionCounter>5</QuestionCounter>
        <ScoreTracker>{props.tracker}</ScoreTracker>
      </MedText>
      <p>Q5</p>
      <Button onClick={handleClick} buttonText={<p>Submit</p>}></Button>
    </div>
  );
};

export default QuestionFive;
