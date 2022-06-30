import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
// import ScoreTracker from "../../ScoreTracker";
import MultiAnswerForm from "../../MultiAnswerForm";

const QuestionFour = (props) => {
  return (
    <div>
      <MedText>
        <QuestionCounter>4</QuestionCounter>
      </MedText>
      <MultiAnswerForm
        question="Which of these answers are part of Indeed's core values?"
        radioButtonText1="Pay per performance"
        radioButtonText2="I help people get jobs"
        radioButtonText3="Inclusion and Belonging"
        radioButtonText4="Data driven"
        radioButtonText5="Job seeker first"
        nextPage="/questionFive"
      ></MultiAnswerForm>
    </div>
  );
};

export default QuestionFour;
