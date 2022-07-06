import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import SplashPage from "./Components/SplashPage";
import QPageLayout from "./Components/QPageLayout";
import ResultsPage from "./Components/ResultsPage";
import questions from "./Components/Questions";

function shallowEqual(object1, object2) {
  if (typeof object1 === "object" && typeof object2 === "object") {
    const keys1 = Object.keys(object1);
    for (let key of keys1) {
      // if undefined, double invert converts undefined to false
      if (!!object1[key] !== !!object2[key]) {
        return false;
      }
    }
    return true;
  }
}

export default function App(props) {
  const [playerName, setPlayerName] = React.useState("");

  const [values, setValues] = React.useState({});

  const [submitted, setSubmitted] = React.useState({});
  function resetName() {
    setPlayerName("");
  }

  const [bestScores, setBestScores] = React.useState({});
  //if undefined, set to 0
  const bestScore = bestScores[playerName] || 0;

  const [wooow, setWooow] = React.useState(false);

  function resetRadioButtons() {
    setValues("");
    setSubmitted("");
  }
  let currentScore = 0;
  for (let index = 0; index < questions.length; index++) {
    values[index] === questions[index].answer ||
    (shallowEqual(questions[index].answer, values[index]) &&
      submitted[index] === true)
      ? currentScore++
      : currentScore;
  }
  function compareScore() {
    if (currentScore > bestScore) {
      setBestScores(({ ...previousBestScores }) => {
        previousBestScores[playerName] = currentScore;
        return previousBestScores;
      });
    }
  }
  return (
    <div className={`reactApp ${wooow ? "wooow" : ""}`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <SplashPage
                playerName={playerName}
                setPlayerName={setPlayerName}
                isWooow={wooow}
              />
            }
          />
          {questions.map((eachQuestion, index) => {
            return (
              <Route
                path={`/question${index + 1}`}
                element={
                  <QPageLayout
                    counter={index + 1}
                    scoreTracker={currentScore}
                    question={eachQuestion}
                    nextPage={
                      index === questions.length - 1
                        ? "/resultsPage"
                        : `/question${index + 2}`
                    }
                    onChange={(e) => {
                      if (typeof eachQuestion.answer === "string") {
                        setValues(({ ...previousValue }) => {
                          previousValue[index] = e.target.value;
                          return previousValue;
                        });
                      } else {
                        setValues(({ ...previousValue }) => {
                          //ensures selection is an object
                          previousValue[index] = { ...previousValue[index] };
                          //question 4 object - setting checkbox to true
                          previousValue[index][e.target.value] =
                            //inverts previous selection
                            !previousValue[index][e.target.value];
                          return previousValue;
                        });
                      }
                    }}
                    onSubmit={(e) => {
                      setSubmitted(({ ...previousSubmitted }) => {
                        previousSubmitted[index] = true;
                        return previousSubmitted;
                      });
                    }}
                    isSubmitted={submitted[index] === true}
                    value={values[index]}
                    isCorrect={
                      //for radio buttons
                      values[index] === eachQuestion.answer ||
                      //for checkbox
                      //swapped parameters so function will check for ALL required answers vs just selection
                      shallowEqual(eachQuestion.answer, values[index])
                    }
                  />
                }
              />
            );
          })}

          <Route
            path="/resultsPage"
            element={
              <ResultsPage
                playerName={playerName}
                resetName={resetName}
                resetRadioButtons={resetRadioButtons}
                finalScore={currentScore}
                bestScore={bestScore}
                compareScore={compareScore}
                isWooow={wooow}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <button
        className="wooowButton"
        onClick={() => {
          if (wooow === true) {
            setWooow(false);
          } else {
            setWooow(true);
          }
        }}
      ></button>
    </div>
  );
}
