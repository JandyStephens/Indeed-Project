import React from "react";
import HeaderText from "../HeaderText";
import CustomButton from "../CustomButton";

const SplashPage = (props) => {
  return (
    <div>
      <HeaderText className="splashPage">Trivia</HeaderText>
      <p>
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
      </form>
      <br />
      <CustomButton
        // type="submit"
        // value="Log Name"
        // onSubmit="handleSubmit"
        nextPage="/questionOne"
      >
        Let's Begin!
      </CustomButton>
    </div>
  );
};

export default SplashPage;
