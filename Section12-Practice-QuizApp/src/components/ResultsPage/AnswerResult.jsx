export default function AnswerResult({ number, question, answer, isCorrect }) {
  const answerColor = isCorrect ? "text-green-800" : "text-red-800";
  return (
    <div className="flex flex-col items-center">
      <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
        <p>{number}</p>
      </div>
      <p className="mt-3 text-xs text-gray-600 font-bold">{question}</p>
      <p className={"text-xs font-bold mt-1 " + answerColor}>{answer}</p>
    </div>
  );
}
