import { useContext } from "react";
import QuizElements from "./QuizElements";
import QuizButton from "./QuizButton";
import { STYLES } from "../styleClasses";
import { QuizContext } from "./Context/QuizContext";

export default function QuizContainer() {
  const quizContext = useContext(QuizContext);

  return (
    <div className="mt-8 min-w-fit w-2/5 bg-blue-950 rounded-lg flex flex-col justify-center items-center py-8 px-16">
      {quizContext.quizStarted ? (
        <QuizElements></QuizElements>
      ) : (
        <QuizButton
          buttonColor={STYLES.defaultButtonColor}
          onClick={() => quizContext.startQuiz()}
        >
          Start Quiz
        </QuizButton>
      )}
    </div>
  );
}
