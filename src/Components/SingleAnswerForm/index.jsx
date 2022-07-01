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
        <input type="radio" name="oneAnswerRadioForm" value="option1" />
        {props.radioButtonText1}
      </label>
      <br />
      <label>
        <input type="radio" name="oneAnswerRadioForm" value="option2" />
        {props.radioButtonText2}
      </label>
      <br />
      <label>
        <input type="radio" name="oneAnswerRadioForm" value="option3" />
        {props.radioButtonText3}
      </label>
      <br />
      <label>
        <input type="radio" name="oneAnswerRadioForm" value="option4" />
        {props.radioButtonText4}
      </label>
      <br />
      <CustomButton nextPage={props.nextPage}>Next Question </CustomButton>
    </form>
  );
}

export default SingleAnswerForm;
