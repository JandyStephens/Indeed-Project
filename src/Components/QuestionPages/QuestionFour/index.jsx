import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import ScoreTracker from "../../ScoreTracker";
import SingleAnswerForm from "../../SingleAnswerForm";

const QuestionFour = (props) => {
  return (
    <div>
      <MedText>
        <QuestionCounter>4</QuestionCounter>
        <ScoreTracker>{props.tracker}</ScoreTracker>
      </MedText>
      <SingleAnswerForm
        question="?"
        radioButtonText1="Job seeker first"
        radioButtonText2="Pay per performance"
        radioButtonText3="Data driven"
        radioButtonText4="Innovation"
        radioButtonText5="Inclusion+Belonging"
        nextPage="/questionFive"
      ></SingleAnswerForm>
    </div>
  );
};

export default QuestionFour;
