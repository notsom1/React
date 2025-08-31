import ProgressBar from "./ProgressBar";
import QuizButtons from "./QuizButtons";
import { useContext, useState } from "react";
import questions from "../questionsData";
import { QuizContext } from "./Context/QuizContext";

export default function QuizElements({ choices }) {
  const quizContext = useContext(QuizContext);
  return (
    <>
      <ProgressBar></ProgressBar>
      <h2 className="text-2xl mt-6 mb-8">
        {questions[quizContext.currentQuestion].text}
      </h2>
      <QuizButtons></QuizButtons>
    </>
  );
}
