import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import "./style.css";
import SplashPage from "./Components/SplashPage";
import QuestionOne from "./Components/QuestionPages/QuestionOne";
import QuestionTwo from "./Components/QuestionPages/QuestionTwo";
import QuestionThree from "./Components/QuestionPages/QuestionThree";
import QuestionFour from "./Components/QuestionPages/QuestionFour";
import QuestionFive from "./Components/QuestionPages/QuestionFive";
import ResultsPage from "./Components/ResultsPage";

export default function App() {
  const [playerName, setPlayerName] = React.useState("");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SplashPage
                playerName={playerName}
                setPlayerName={setPlayerName}
              />
            }
          />
          <Route path="/questionOne" element={<QuestionOne />} />
          <Route path="/questionTwo" element={<QuestionTwo />} />
          <Route path="/questionThree" element={<QuestionThree />} />
          <Route path="/questionFour" element={<QuestionFour />} />
          <Route path="/questionFive" element={<QuestionFive />} />
          <Route
            path="/resultsPage"
            element={<ResultsPage playerName={playerName} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
  // return <QuestionPage tracker="5" counter="3" card="x" />;
  // return <ResultsPage></ResultsPage>;
}
