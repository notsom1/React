import QuizButton from "./QuizButton";
import { STYLES } from "../styleClasses";
import { useContext } from "react";
import { QuizContext } from "./Context/QuizContext";

export default function QuizButtons({}) {
  const quizContext = useContext(QuizContext);

  let notPickedColor = STYLES.defaultButtonColor;
  let pickedColor = STYLES.defaultButtonColor;

  if (quizContext.pickedAnswer >= 0) {
    if (quizContext.isCorrect) {
      pickedColor = STYLES.correctButtonColor;
    } else {
      pickedColor = STYLES.wrongButtonColor;
    }

    notPickedColor = STYLES.disabledButtonColor;
  }

  return (
    <>
      {quizContext.choices.map((answer, i) => {
        return (
          <QuizButton
            key={i}
            buttonColor={
              quizContext.pickedAnswer === i ? pickedColor : notPickedColor
            }
            className="mt-2"
            onClick={() => quizContext.checkAnswer(answer, i)}
          >
            {answer}
          </QuizButton>
        );
      })}
    </>
  );
}
