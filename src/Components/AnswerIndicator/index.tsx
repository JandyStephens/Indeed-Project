import React from "react";
import "./style.css";

const CorrectIndicator = () => (
  <div className="correctIndicator" id="correctIndicator">
    You got it right!
  </div>
);
//implicitly returning JSX element vs...
const IncorrectIndicator = () => (
  <div className="incorrectIndicator" id="correctIndicator">
    That is incorrect
  </div>
);

//having brackets means REQUIRE 'return' statement
function AnswerReveal(props) {
  if (props.isCorrect) {
    return <CorrectIndicator />;
  } else {
    return <IncorrectIndicator />;
  }
}

export default AnswerReveal;
