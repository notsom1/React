import ResultsHeader from "./ResultsHeader";
import PercentageSummaryBox from "./PercentageSummaryBox";
import AnswersResults from "./AnswersResults";
export default function ResultsContainer() {
  return (
    <div className="bg-violet-400 mt-8 min-w-fit w-2/5 rounded-lg flex flex-col justify-center items-center py-8 px-16">
      <ResultsHeader></ResultsHeader>
      <PercentageSummaryBox></PercentageSummaryBox>
      <AnswersResults></AnswersResults>
    </div>
  );
}
