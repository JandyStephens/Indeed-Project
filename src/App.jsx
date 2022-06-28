import React from "react";
// import "./style.css";
import QuestionCard from "./Components/QuestionCards";
import Button from "./Components/Button";

function App() {
  return (
    <div>
      <QuestionCard>
        <p>How many cats does Jandy have?</p>
      </QuestionCard>
      <Button>
        <p>Next Question</p>
      </Button>
    </div>
  );
}

export default App;
