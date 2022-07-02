import React from "react";
import CustomButton from "../CustomButton";

function MultiAnswerForm(props) {
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
        <input type="checkbox" name="answer1" value="option1" />
        {props.radioButtonText1}
      </label>
      <br />
      <label>
        <input type="checkbox" name="answer2" value="option2" />
        {props.radioButtonText2}
      </label>
      <br />
      <label>
        <input type="checkbox" name="answer3" value="option3" />
        {props.radioButtonText3}
      </label>
      <br />
      <label>
        <input type="checkbox" name="answer4" value="option4" />
        {props.radioButtonText4}
      </label>
      <br />

      <CustomButton nextPage={props.nextPage}>Next Question</CustomButton>
    </form>
  );
}

export default MultiAnswerForm;
