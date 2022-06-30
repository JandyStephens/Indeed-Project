import React from "react";
import { useLinkClickHandler } from "react-router-dom";
import CustomButton from "../CustomButton";

function SingleAnswerForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>{props.question}</label>
      <br />
      <label>
        <input type="radio" name="answer1" value="{props.radioButtonText1}" />
      </label>
      <br />
      <label>
        <input type="radio" name="answer2" value="{props.radioButtonText2}" />
      </label>
      <br />
      <label>
        <input type="radio" name="answer3" value="{props.radioButtonText3}" />
      </label>
      <br />
      <label>
        <input type="radio" name="answer4" value="{props.radioButtonText4}" />
      </label>
      <br />
      <CustomButton nextPage={props.nextPage}>
        Show Me the Correct Answer
      </CustomButton>
    </form>
  );
}

export default SingleAnswerForm;
