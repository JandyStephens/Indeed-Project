import React from "react";
import { useLinkClickHandler } from "react-router-dom";
import CustomButton from "../CustomButton";
import "./style.css";

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
        <input
          type="radio"
          value="option1"
          onChange={props.onChange}
          checked={props.value === "option1"}
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
        />
        {props.radioButtonText4}
      </label>
      <br />
      <CustomButton nextPage={props.nextPage}>Next Question </CustomButton>
    </form>
  );
}

export default SingleAnswerForm;
