import React from "react";
import "../../style.css";
import CustomButton from "../CustomButton";

const SplashPage = (props) => {
  return (
    <div className="splashPage">
      <h1 className="splashHeader">Trivia</h1>
      <p className="instructions">
        Select the correct answer(s) to the following 5 questions. Your final
        score will be displayed at the end. Enjoy!
      </p>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          name="playerName"
          type="text"
          placeholder="Enter your name here"
          value={props.playerName}
          onChange={(e) => props.setPlayerName(e.target.value)}
        />
        <br />
        <br />
        <CustomButton
          nextPage="/question1"
          isDisabled={props.playerName ? false : true}
        >
          Let's Begin!
        </CustomButton>
      </form>
      <br />
    </div>
  );
};

export default SplashPage;
