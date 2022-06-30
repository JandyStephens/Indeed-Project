import React from "react";
import MedText from "../../MedText";
import QuestionCounter from "../QuestionCounter";
import SingleAnswerForm from "../../SingleAnswerForm";

const QuestionTwo = (props) => {
  return (
    <div>
      <MedText>
        <QuestionCounter>2</QuestionCounter>
      </MedText>
      <SingleAnswerForm
        question="In 2014 the Guinness Book of World Records awarded the title of “most expensive hot dog commercially available” to a restaurant in which city?"
        radioButtonText1="New York"
        radioButtonText2="Chicago"
        radioButtonText3="Seattle"
        radioButtonText4="Los Angeles"
        nextPage="/questionThree"
      ></SingleAnswerForm>
    </div>
  );
};

export default QuestionTwo;
