import React from "react";
import "./style.css";

const CorrectIndicator = () => (
  <div className="answerIndicator" id="correctIndicator">
    You got it right!
  </div>
);
//implicitly returning JSX element vs...
const IncorrectIndicator = () => (
  <div className="answerIndicator" id="incorrectIndicator">
    You got it wrong
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
