import React from "react";
import "../../style.css";
import "./style.css";
import CustomButton from "../CustomButton";
import amazing_pic from "../../assets/images/amazing.jpeg";
import amazing_neon from "../../assets/images/amazing_neon.jpeg";
import almost_there from "../../assets/images/almost_there.jpeg";
import almost_there_neon from "../../assets/images/almost_there_neon.jpeg";
import cloud_encouragement_pic from "../../assets/images/cloud_encouragement.jpeg";
import whomp_neon from "../../assets/images/whomp_neon.jpeg";
import { useEffect } from "react";

function whichPic(score, isWooow) {
  if (score === 5) {
    return isWooow ? amazing_neon : amazing_pic;
  } else if (score === 3 || score === 4) {
    return isWooow ? almost_there_neon : almost_there;
  } else {
    return isWooow ? whomp_neon : cloud_encouragement_pic;
  }
}
function whichAltText(score) {
  if (score === 5) {
    return "the word 'amazing' in comic book font";
  } else if (score === 3 || score === 4) {
    return "one panel comic that says 'don't stop now, you're almost there!'";
  } else {
    return "4 panel comic of a happy cloud saying that it's okay to take a break and that you're doing so well";
  }
}
function whichResultHeader(score, playerName) {
  if (score === 5) {
    return `${playerName}, you're a Trivia Master!`;
  } else if (score === 3 || score === 4) {
    return `So close, ${playerName}!`;
  } else {
    return `Don't worry ${playerName}, you can try again`;
  }
}

const ResultsPage = (props) => {
  function resetEverything(event) {
    props.resetName(event);
    props.resetRadioButtons(event);
  }
  //on page load, it runs function and updates (if needed)
  useEffect(() => {
    props.compareScore();
  });

  return (
    <div className="container">
      <img
        src={whichPic(props.finalScore, props.isWooow)}
        alt={whichAltText(props.finalScore)}
      />

      <h1 className="resultHeader">
        {whichResultHeader(props.finalScore, props.playerName)}
      </h1>
      <div className="resultsText">
        You got {props.finalScore} out of 5 questions right!
        <br /> Your best score so far was {props.bestScore} out of 5 questions
        which you got on {new Date().toLocaleDateString()}
      </div>
      <br />
      <div className="resultButtonContainer">
        <CustomButton nextPage="/question1" onClick={props.resetRadioButtons}>
          Try Again
        </CustomButton>
        <br />
        <CustomButton nextPage="/" onClick={resetEverything}>
          Play as New Person
        </CustomButton>
      </div>
    </div>
  );
};

export default ResultsPage;
