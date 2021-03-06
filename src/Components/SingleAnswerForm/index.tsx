import React from "react";
import CustomButton from "../CustomButton";
import SubmitButton from "../SubmitButton";
import "./style.css";
import AnswerReveal from "../AnswerIndicator";

function SingleAnswerForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>{props.question}</label>
      <br />
      <br />
      <label>
        <input
          type="radio"
          value="option1"
          onChange={props.onChange}
          checked={props.value === "option1"}
          disabled={props.isSubmitted ? true : false}
        />
        {props.radioButtonText1}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option2"
          onChange={props.onChange}
          checked={props.value === "option2"}
          disabled={props.isSubmitted ? true : false}
        />
        {props.radioButtonText2}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option3"
          onChange={props.onChange}
          checked={props.value === "option3"}
          disabled={props.isSubmitted ? true : false}
        />
        {props.radioButtonText3}
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="option4"
          onChange={props.onChange}
          checked={props.value === "option4"}
          disabled={props.isSubmitted ? true : false}
        />
        {props.radioButtonText4}
      </label>
      <br />
      <br />
      {props.isSubmitted ? <AnswerReveal isCorrect={props.isCorrect} /> : null}
      <br />
      {props.isSubmitted ? (
        <CustomButton nextPage={props.nextPage}>Next Question </CustomButton>
      ) : (
        <SubmitButton disabled={!props.value}>Check my answer</SubmitButton>
      )}
    </form>
  );
}

export default SingleAnswerForm;
