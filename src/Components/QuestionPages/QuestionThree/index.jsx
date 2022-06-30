import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import SingleAnswerForm from "../../SingleAnswerForm";

const QuestionThree = (props) => {
  return (
    <div>
      <MedText>
        <QuestionCounter>3</QuestionCounter>
      </MedText>
      <SingleAnswerForm
        question="Who invented the pinball 'tilt' mechanism?"
        radioButtonText1="Betty Flack"
        radioButtonText2="Harry Williams"
        radioButtonText3="Charles Dunn"
        radioButtonText4="Seamus Flannigan"
        nextPage="/questionFour"
      ></SingleAnswerForm>
    </div>
  );
};

export default QuestionThree;
