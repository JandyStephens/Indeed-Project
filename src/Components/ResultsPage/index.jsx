import React from "react";
import CustomButton from "../CustomButton";
import HeaderText from "../HeaderText";

const ResultsPage = (props) => {
  return (
    <div>
      <HeaderText>
        <p>You got {props.finalScore} out of 5!</p>
      </HeaderText>
      {/* V2 - Button takes you to first question instead of splashpage - Keep name */}
      <CustomButton nextPage="/questionOne">Try Again</CustomButton>
      <CustomButton nextPage="/">Play as New Person</CustomButton>
    </div>
  );
};

export default ResultsPage;
