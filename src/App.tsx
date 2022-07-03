import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./style.css";
import SplashPage from "./Components/SplashPage";
import QPageLayout from "./Components/QPageLayout";
import ResultsPage from "./Components/ResultsPage";
import questions from "./Components/Questions";
import CustomButton from "./Components/CustomButton";

export default function App(props) {
  const [playerName, setPlayerName] = React.useState("");
  const [values, setValues] = React.useState({});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SplashPage
                  playerName={playerName}
                  setPlayerName={setPlayerName}
                />
                <CustomButton
                  // type="submit"
                  // value="Log Name"
                  nextPage="/question1"
                >
                  Let's Begin!
                </CustomButton>
              </div>
            }
          />
          {questions.map((eachQuestion, index) => (
            <Route
              path={`/question${index + 1}`}
              // path="/QPageLayout"
              element={
                <QPageLayout
                  counter={index + 1}
                  scoreTracker="To-Do"
                  question={eachQuestion.question}
                  radioButtonText1={eachQuestion.choice[0]}
                  radioButtonText2={eachQuestion.choice[1]}
                  radioButtonText3={eachQuestion.choice[2]}
                  radioButtonText4={eachQuestion.choice[3]}
                  nextPage={
                    index === questions.length - 1
                      ? "/resultsPage"
                      : `/question${index + 2}`
                  }
                  onChange={(e) => {
                    setValues(({ ...previousValue }) => {
                      previousValue[index] = e.target.value;

                      return previousValue;
                    });
                  }}
                  value={values[index]}
                />
              }
            />
          ))}

          <Route
            path="/resultsPage"
            element={
              <div>
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
                {/* takes you to first question instead of splashpage - Keeps player name */}
                <CustomButton nextPage="/question1">Try Again</CustomButton>
                {/* takes you to splashpage to enter new name*/}
                <CustomButton nextPage="/">Play as New Person</CustomButton>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
