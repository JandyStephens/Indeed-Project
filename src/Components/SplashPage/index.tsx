import React from "react";
import "../../style.css";
import CustomButton from "../CustomButton";
import TriviaBanner from "../../assets/images/trivia_banner.jpeg";
import NeonTriviaBanner from "../../assets/images/trivia_neon.jpeg";

//This button was made in the spirit of fun for the 'wow' factor. Labelling was intentionally left off because I wanted curiousity of the user about "that weird blinking button" to be engaged. Because of this, I understand that it is not completely accessible to everyone. Overall, I made sure that the main requirements were accessible and if someone one did not see it or cannot see it, it would not impact their overall experience.

const SplashPage = (props) => {
  return (
    <div className="container">
      <img
        src={props.isWooow ? NeonTriviaBanner : TriviaBanner}
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
          Let's Begin
        </CustomButton>
      </form>
      <br />
    </div>
  );
};

export default SplashPage;
