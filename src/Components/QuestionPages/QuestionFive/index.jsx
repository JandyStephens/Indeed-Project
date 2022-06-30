import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../../ScoreTracker";
import SingleAnswerForm from "../../SingleAnswerForm";

const QuestionFive = (props) => {
  return (
    <div>
      <MedText>
        <QuestionCounter>5</QuestionCounter>
        <ScoreTracker>{props.tracker}</ScoreTracker>
      </MedText>
      <SingleAnswerForm
        question="?"
        radioButtonText1=""
        radioButtonText2=""
        radioButtonText3=""
        radioButtonText4=""
        nextPage="/resultsPage"
      ></SingleAnswerForm>
    </div>
  );
};

export default QuestionFive;
