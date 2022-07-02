import React from "react";
import "../../../style.css";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../../ScoreTracker";
import MultiAnswerForm from "../../MultiAnswerForm";

const QuestionFour = (props) => {
  return (
    <div>
      <QuestionCounter>4</QuestionCounter>
      <ScoreTracker></ScoreTracker>
      <MultiAnswerForm
        question="Which of these answers are part of Indeed's core values?"
        radioButtonText1="Pay per performance"
        radioButtonText2="I help people get jobs"
        radioButtonText3="Job seeker first"
        radioButtonText4="Data driven"
        nextPage="/questionFive"
      ></MultiAnswerForm>
    </div>
  );
};

export default QuestionFour;
