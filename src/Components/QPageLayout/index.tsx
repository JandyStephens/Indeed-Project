import React from "react";
import MultiAnswerForm from "../MultiAnswerForm";
import QuestionCounter from "../QCounter";
import ScoreTracker from "../ScoreTracker";
import SingleAnswerForm from "../SingleAnswerForm";

const QPageLayout = (props) => {
  return (
    <div className="container">
      <QuestionCounter>{props.counter}</QuestionCounter>
      <ScoreTracker>{props.scoreTracker}</ScoreTracker>

      {typeof props.question.answer === "string" ? (
        <SingleAnswerForm
          question={props.question.question}
          radioButtonText1={props.question.choice[0]}
          radioButtonText2={props.question.choice[1]}
          radioButtonText3={props.question.choice[2]}
          radioButtonText4={props.question.choice[3]}
          nextPage={props.nextPage}
          onChange={props.onChange}
          value={props.value}
          onSubmit={props.onSubmit}
          isSubmitted={props.isSubmitted}
          isCorrect={props.isCorrect}
        ></SingleAnswerForm>
      ) : (
        <MultiAnswerForm
          question={props.question.question}
          checkboxText1={props.question.choice[0]}
          checkboxText2={props.question.choice[1]}
          checkboxText3={props.question.choice[2]}
          checkboxText4={props.question.choice[3]}
          nextPage={props.nextPage}
          onChange={props.onChange}
          value={props.value}
          onSubmit={props.onSubmit}
          isSubmitted={props.isSubmitted}
          isCorrect={props.isCorrect}
        ></MultiAnswerForm>
      )}
    </div>
  );
};

export default QPageLayout;
