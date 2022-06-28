import React from "react";
import Button from "../Button";
import HeaderText from "../HeaderText";

const ResultsPage = (props) => {
  return (
    <div>
      <HeaderText>
        <p>You got {props.children} out of 5!</p>
      </HeaderText>
      {/* V2 - Button takes you to first question instead of splashpage - Keep name */}
      <Button>
        <p>Try Again</p>
      </Button>
    </div>
  );
};

export default ResultsPage;
