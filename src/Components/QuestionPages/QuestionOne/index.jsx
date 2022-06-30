import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import SingleAnswerForm from "../../SingleAnswerForm";

const QuestionOne = (props) => {
  return (
    <div>
      <MedText>
        <QuestionCounter>1</QuestionCounter>
      </MedText>
      <SingleAnswerForm
        question="The Mobile Phone Throwing World Championships take place in which country?"
        radioButtonText1="New Zealand"
        radioButtonText2="The United States"
        radioButtonText3="Finland"
        radioButtonText4="Japan"
        radioButtonText5="Mexico"
        nextPage="/questionTwo"
      ></SingleAnswerForm>
    </div>
  );
};

export default QuestionOne;
