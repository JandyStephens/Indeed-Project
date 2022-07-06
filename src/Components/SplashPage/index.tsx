import React from "react";
import "../../style.css";
import CustomButton from "../CustomButton";
import TriviaBanner from "../../assets/images/trivia_banner.jpeg";

const SplashPage = (props) => {
  return (
    <div className="container">
      <img
        src={TriviaBanner}
        alt="The word 'trivia' spelled out in game tiles"
      />
      <p className="instructions">
        Select the correct answer(s) to the following 5 questions. <br />
        Your final score will be displayed at the end.
        <br />
        <br />
        Enjoy!
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
        <CustomButton nextPage="/question1" isDisabled={!props.playerName}>
          Let's Begin!
        </CustomButton>
      </form>
      <br />
    </div>
  );
};

export default SplashPage;
