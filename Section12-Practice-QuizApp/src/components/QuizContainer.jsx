import ProgressBar from "./ProgressBar";
import QuizButtons from "./QuizButtons";

export default function QuizContainer() {
  const buttonColor = "bg-red-800";
  const percent = 70;
  return (
    <div className="mt-8 min-w-fit w-2/5 bg-blue-950 rounded-lg flex flex-col justify-center items-center py-8 px-16">
      <ProgressBar percent={percent}></ProgressBar>
      <h2 className="text-2xl mt-6">
        How do you typically render list content in React Apps?
      </h2>
      <QuizButtons></QuizButtons>
    </div>
  );
}
