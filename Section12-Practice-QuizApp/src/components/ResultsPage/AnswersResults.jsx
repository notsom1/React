import { useContext } from "react";
import AnswerResult from "./AnswerResult";
import { QuizContext } from "../Context/QuizContext";
import questions from "../../questionsData";

export default function AnswersResults() {
  const quizContext = useContext(QuizContext);
  console.log(quizContext.answersArray);
  return (
    <div className="mt-8">
      {quizContext.answersArray.map((answer, i) => (
        <AnswerResult
          number={i + 1}
          answer={answer === null ? "Skipped" : answer}
          isCorrect={
            answer === undefined ||
            answer !== questions[i].answers[questions[i].correctAnswer]
              ? false
              : true
          }
          question={questions[i].text}
          key={i}
        ></AnswerResult>
      ))}
    </div>
  );
}
