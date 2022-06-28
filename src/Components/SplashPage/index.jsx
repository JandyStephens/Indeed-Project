import React from "react";
import HeaderText from "../HeaderText";
import Button from "../Button";

const SplashPage = (props) => {
  return (
    <div>
      <HeaderText className="splashPage">{props.children}</HeaderText>
      <p>Instructions here</p>
      <Button>
        <p>Start</p>
      </Button>
    </div>
  );
};

export default SplashPage;
