import SinglePercentageResults from "./SinglePercentageResult";
export default function PercentageSummaryBox() {
  return (
    <div className="flex justify-between w-80 mt-8 border-b-2 border-gray-700 pb-6 ">
      <SinglePercentageResults
        labelsArray={["SKIPPED"]}
        percentage={0}
      ></SinglePercentageResults>
      <SinglePercentageResults
        labelsArray={["ANSWERED", "CORRECTLY"]}
        percentage={43}
      ></SinglePercentageResults>
      <SinglePercentageResults
        labelsArray={["ANSWERED", "INCORRECTLY"]}
        percentage={57}
      ></SinglePercentageResults>
    </div>
  );
}
