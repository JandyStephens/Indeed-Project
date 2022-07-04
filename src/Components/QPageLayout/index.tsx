import React from "react";
import QuestionCounter from "../QCounter";
import ScoreTracker from "../ScoreTracker";
import SingleAnswerForm from "../SingleAnswerForm";

const QPageLayout = (props) => {
  return (
    <div>
      <QuestionCounter>{props.counter}</QuestionCounter>
      <ScoreTracker>{props.scoreTracker}</ScoreTracker>
      <SingleAnswerForm
        question={props.question}
        radioButtonText1={props.radioButtonText1}
        radioButtonText2={props.radioButtonText2}
        radioButtonText3={props.radioButtonText3}
        radioButtonText4={props.radioButtonText4}
        nextPage={props.nextPage}
        onChange={props.onChange}
        value={props.value}
        onSubmit={props.onSubmit}
      ></SingleAnswerForm>
    </div>
  );
};

export default QPageLayout;
