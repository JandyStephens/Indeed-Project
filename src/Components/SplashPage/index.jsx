import React from "react";
import HeaderText from "../HeaderText";
import Button from "../Button";
import { useLinkClickHandler } from "react-router-dom";
import QuestionOne from "../QuestionPages/QuestionOne";

const SplashPage = (props) => {
  const handleClick = useLinkClickHandler("/questionOne");
  return (
    <div>
      <HeaderText className="splashPage">Trivia!</HeaderText>
      <p>Instructions here</p>
      <Button onClick={handleClick} buttonText={<p>Start</p>}></Button>
    </div>
  );
};

export default SplashPage;
