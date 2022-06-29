import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../../ScoreTracker";
import Button from "../../Button";
import { useLinkClickHandler } from "react-router-dom";

const QuestionThree = (props) => {
  const handleClick = useLinkClickHandler("/questionFour");
  return (
    <div>
      <MedText>
        <QuestionCounter>3</QuestionCounter>
        <ScoreTracker>{props.tracker}</ScoreTracker>
      </MedText>
      <p>Q3</p>
      <Button onClick={handleClick} buttonText={<p>Submit</p>}></Button>
    </div>
  );
};

export default QuestionThree;
