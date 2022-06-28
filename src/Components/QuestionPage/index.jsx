import React from "react";
import MedText from "../MedText";
import QuestionCard from "../QuestionCard";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../ScoreTracker";

const QuestionPage = (props) => {
  return (
    <div>
      <MedText>
        <QuestionCounter>{props.counter}</QuestionCounter>
        <ScoreTracker>{props.tracker}</ScoreTracker>
      </MedText>
      <QuestionCard>{props.card}</QuestionCard>
    </div>
  );
};

export default QuestionPage;
