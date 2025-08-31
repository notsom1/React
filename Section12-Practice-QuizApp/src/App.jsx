import { useContext } from "react";
import Header from "./components/Header";
import QuizContainer from "./components/QuizContainer";
import ResultsContainer from "./components/ResultsPage/ResultsContainer";
import { QuizContext } from "./components/Context/QuizContext";

function App() {
  const quizContext = useContext(QuizContext);
  return (
    <div className="flex flex-col items-center pt-12">
      <Header></Header>
      {quizContext.isHomePage ? (
        <QuizContainer></QuizContainer>
      ) : (
        <ResultsContainer></ResultsContainer>
      )}
    </div>
  );
}

export default App;
