import QuizButton from "./QuizButton";
import { STYLES } from "../styleClasses";
export default function QuizButtons() {
  return (
    <>
      <QuizButton
        buttonColor={STYLES.defaultButtonColor}
        className="mt-8"
      ></QuizButton>
      <QuizButton
        buttonColor={STYLES.defaultButtonColor}
        className="mt-2"
      ></QuizButton>
      <QuizButton
        buttonColor={STYLES.defaultButtonColor}
        className="mt-2"
      ></QuizButton>
      <QuizButton
        buttonColor={STYLES.defaultButtonColor}
        className="mt-2"
      ></QuizButton>
    </>
  );
}
