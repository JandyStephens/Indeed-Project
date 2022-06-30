import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
// import ScoreTracker from "../../ScoreTracker";
import SingleAnswerForm from "../../SingleAnswerForm";

const QuestionFive = (props) => {
  return (
    <div>
      <MedText>
        <QuestionCounter>5</QuestionCounter>
        {/* <ScoreTracker>{props.tracker}</ScoreTracker> */}
      </MedText>
      <SingleAnswerForm
        question="79% of employees believe that it is important to have what in the
        workplace?"
        radioButtonText1="Fun"
        radioButtonText2="Snacks and drinks provided"
        radioButtonText3="Separate break area"
        radioButtonText4="Motivation"
        radioButtonText5="Respect"
        nextPage="/resultsPage"
      ></SingleAnswerForm>
    </div>
  );
};

export default QuestionFive;
