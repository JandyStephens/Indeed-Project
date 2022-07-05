import React from "react";
import CustomButton from "../CustomButton";
import SubmitButton from "../SubmitButton";
import "../../style.css";
import AnswerReveal from "../AnswerIndicator";

function MultiAnswerForm(props) {
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
          type="checkbox"
          name="indeedValues"
          value="option1"
          onChange={props.onChange}
          checked={props.value?.option1 === true}
          disabled={props.isSubmitted ? true : false}
        />
        {props.checkboxText1}
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="indeedValues"
          value="option2"
          onChange={props.onChange}
          checked={props.value?.option2 === true}
          disabled={props.isSubmitted ? true : false}
        />
        {props.checkboxText2}
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="indeedValues"
          value="option3"
          onChange={props.onChange}
          checked={props.value?.option3 === true}
          disabled={props.isSubmitted ? true : false}
        />
        {props.checkboxText3}
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="indeedValues"
          value="option4"
          onChange={props.onChange}
          checked={props.value?.option4 === true}
          disabled={props.isSubmitted ? true : false}
        />
        {props.checkboxText4}
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

export default MultiAnswerForm;
