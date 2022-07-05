import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import SplashPage from "./Components/SplashPage";
import QPageLayout from "./Components/QPageLayout";
import ResultsPage from "./Components/ResultsPage";
import questions from "./Components/Questions";

export default function App(props) {
  const [playerName, setPlayerName] = React.useState("");

  const [values, setValues] = React.useState({});

  /*
  {
    0: 'option1',
    1: 'option3',
    2: 'option1',
    3: {'option2': true, 'option3': false}
  }
  */

  const [checkboxState, setCheckboxState] = React.useState(
    new Array(4).fill(false)
  );
  function updateCheckbox(index) {
    setCheckboxState(([...oldCheckboxState]) => {
      oldCheckboxState[index] = true;

      return oldCheckboxState;
    });
  }

  const [submitted, setSubmitted] = React.useState({});
  function resetName() {
    setPlayerName("");
  }

  function resetRadioButtons() {
    setValues("");
    setSubmitted("");
  }
  let score = 0;
  for (let index = 0; index < questions.length; index++) {
    values[index] === questions[index].answer && submitted[index] === true
      ? score++
      : score;
  }

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
              </div>
            }
          />
          {questions.map((eachQuestion, index) => (
            <Route
              path={`/question${index + 1}`}
              element={
                <QPageLayout
                  counter={index + 1}
                  scoreTracker={score}
                  // question={eachQuestion.question}
                  // answer={eachQuestion.answer}
                  // radioButtonText1={eachQuestion.choice[0]}
                  // radioButtonText2={eachQuestion.choice[1]}
                  // radioButtonText3={eachQuestion.choice[2]}
                  // radioButtonText4={eachQuestion.choice[3]}
                  question={eachQuestion}
                  checked={checkboxState[index]}
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
                          //inverts previous selection - CAN be itself
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
                  isCorrect={values[index] === eachQuestion.answer}
                />
              }
            />
          ))}

          <Route
            path="/resultsPage"
            element={
              <ResultsPage
                playerName={playerName}
                resetName={resetName}
                resetRadioButtons={resetRadioButtons}
                finalScore={score}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
