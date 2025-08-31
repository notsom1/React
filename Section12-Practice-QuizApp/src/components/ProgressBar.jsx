import { useState, useRef, useEffect, useContext } from "react";
import { QuizContext } from "./Context/QuizContext";

export default function ProgressBar() {
  const quizContext = useContext(QuizContext);
  const [remainingTime, setRemainingTime] = useState(quizContext.initialTime);

  const barColor =
    quizContext.pickedAnswer >= 0 ? "bg-yellow-200" : "bg-purple-900";

  let timer = useRef();
  let changeQuestion = useRef();

  useEffect(() => {
    if (changeQuestion.current === true) {
      changeQuestion.current = false;
      quizContext.nextQuestion();
    }
  }, [changeQuestion.current]);

  useEffect(() => {
    console.log("hi");
    quizContext.startedTimer();
    clearInterval(timer.current);
    setRemainingTime(quizContext.initialTime);
    timer.current = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => clearInterval(timer.current);
  }, [quizContext.startTimer, quizContext.initialTime]);

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    setRemainingTime(quizContext.initialTime);
    changeQuestion.current = true;
  }
  const percent = (remainingTime / quizContext.initialTime) * 100;

  return (
    <div className="bg-gray-600 h-2 w-2/4 rounded-lg mt-4">
      <div
        className={"h-2 rounded-lg " + barColor}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
}
