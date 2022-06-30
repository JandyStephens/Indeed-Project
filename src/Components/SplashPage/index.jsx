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
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <br />
        <input
          name="playerName"
          type="text"
          placeholder="Enter your name here"
        />
      </form>
      <br />
      <CustomButton nextPage="/questionOne">Let's Begin!</CustomButton>
    </div>
  );
};

export default SplashPage;
