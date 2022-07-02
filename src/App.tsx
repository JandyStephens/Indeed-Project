import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./style.css";
import SplashPage from "./Components/SplashPage";
import QuestionOne from "./Components/QuestionPages/Q1/index";
import QuestionTwo from "./Components/QuestionPages/Q2/index";
import QuestionThree from "./Components/QuestionPages/Q3/index";
import QuestionFour from "./Components/QuestionPages/Q4/index";
import QuestionFive from "./Components/QuestionPages/Q5/index";
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
            element={
              <ResultsPage
                playerName={playerName}
                // onClick={() => setPlayerName(() => "")}
                // onSubmit="resetPlayerName"
                // onClick={playerName={""}}
                // onChange={(e) => {
                //   const resetPlayerName = { playerName: e.target.value };
                //   setPlayerName("");
                // }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
  // return <QuestionPage tracker="5" counter="3" card="x" />;
  // return <ResultsPage></ResultsPage>;
}
