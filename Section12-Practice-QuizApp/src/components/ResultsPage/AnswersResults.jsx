import AnswerResult from "./AnswerResult";

export default function AnswersResults() {
  return (
    <div className="mt-8">
      <AnswerResult
        number={1}
        question={"Which of the following definitions best describes React.js?"}
        answer={
          "Enabling the use of state and other React features in functional components"
        }
        isCorrect={true}
      ></AnswerResult>
    </div>
  );
}
