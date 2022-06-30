import React from "react";
import HeaderText from "../HeaderText";
import CustomButton from "../CustomButton";

const SplashPage = (props) => {
  return (
    <div>
      <HeaderText className="splashPage">Trivia!</HeaderText>
      <p>Instructions here</p>
      <CustomButton nextPage="/questionOne">Let's Begin!</CustomButton>
    </div>
  );
};

export default SplashPage;
