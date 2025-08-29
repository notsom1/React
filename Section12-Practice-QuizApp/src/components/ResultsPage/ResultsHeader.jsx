import logo from "../../assets/quiz-complete.png";
export default function ResultsHeader() {
  return (
    <>
      <div className="w-32 h-32 bg-purple-400 border-black border-2 ring-4 ring-black ring-opacity-5 rounded-full flex justify-center items-center">
        <img src={logo} alt="winning trophy" className="w-20" />
      </div>
      <h1 className="text-5xl text-violet-950 font-bold mt-8">
        QUIZ COMPLETED!
      </h1>
    </>
  );
}
