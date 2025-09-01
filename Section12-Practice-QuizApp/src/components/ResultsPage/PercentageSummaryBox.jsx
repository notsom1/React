import { useContext } from "react";
import SinglePercentageResults from "./SinglePercentageResult";
import { QuizContext } from "../Context/QuizContext";
export default function PercentageSummaryBox() {
  const quizContext = useContext(QuizContext);

  const skippedPercentage = Math.round(
    (quizContext.score.skipped / quizContext.totalQuestions) * 100
  );
  const correctPercentage = Math.round(
    (quizContext.score.correct / quizContext.totalQuestions) * 100
  );
  const wrongPercentage = Math.round(
    (quizContext.score.wrong / quizContext.totalQuestions) * 100
  );

  console.log("questions: " + quizContext.totalQuestions);
  console.log("wrong: " + quizContext.score.wrong);
  console.log("skipped: " + quizContext.score.skipped);
  return (
    <div className="flex justify-between w-80 mt-8 border-b-2 border-gray-700 pb-6 ">
      <SinglePercentageResults
        labelsArray={["SKIPPED"]}
        percentage={skippedPercentage}
      ></SinglePercentageResults>
      <SinglePercentageResults
        labelsArray={["ANSWERED", "CORRECTLY"]}
        percentage={correctPercentage}
      ></SinglePercentageResults>
      <SinglePercentageResults
        labelsArray={["ANSWERED", "INCORRECTLY"]}
        percentage={wrongPercentage}
      ></SinglePercentageResults>
    </div>
  );
}
