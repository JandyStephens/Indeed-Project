import React from "react";
import Button from "../Button";
import HeaderText from "../HeaderText";
import { useLinkClickHandler } from "react-router-dom";

const ResultsPage = (props) => {
  const handleRetryClick = useLinkClickHandler("/questionOne");
  const handleNewPersonClick = useLinkClickHandler("/");
  return (
    <div>
      <HeaderText>
        <p>You got {props.finalScore} out of 5!</p>
      </HeaderText>
      {/* V2 - Button takes you to first question instead of splashpage - Keep name */}
      <Button onClick={handleRetryClick} buttonText={<p>Try Again</p>}></Button>
      <Button
        onClick={handleNewPersonClick}
        buttonText={<p>Play as New Person</p>}
      ></Button>
    </div>
  );
};

export default ResultsPage;
