import React from "react";
// import "./style.css";
import QuestionCard from "./Components/QuestionCard";
import Button from "./Components/Button";
import HeaderText from "./Components/HeaderText";
import SplashPage from "./Components/SplashPage";
import QuestionPage from "./Components/QuestionPage";
import MedText from "./Components/MedText";
import QuestionCounter from "./Components/QuestionCounter";
import ScoreTracker from "./Components/ScoreTracker";
import ResultsPage from "./Components/ResultsPage";

function App() {
  // return (
  //   <div>
  //     <SplashPage>
  //       <HeaderText>Trivia!</HeaderText>
  //     </SplashPage>
  //   </div>
  // );
  return <QuestionPage tracker="5" counter="3" card="x" />;
  // return <ResultsPage></ResultsPage>;
}

export default App;
