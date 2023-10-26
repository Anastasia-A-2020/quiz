import { useState } from "react";
import "./index.scss";
import { questions } from "./quetions";
import { Game } from "./components/Game";
import { Result } from "./components/Resalts";

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = questions[step];

  const onClickVariant = index => {
    setStep(prev => prev + 1);
    if (index === question.correct) {
      setCorrect(prev => prev + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          questions={questions}
          question={question}
          onClickVariant={onClickVariant}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
