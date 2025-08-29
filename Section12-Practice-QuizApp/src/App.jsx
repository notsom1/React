import Header from "./components/Header";
import QuizContainer from "./components/QuizContainer";
import ResultsContainer from "./components/ResultsPage/ResultsContainer";

function App() {
  return (
    <div className="flex flex-col items-center pt-12">
      <Header></Header>
      {/* <QuizContainer></QuizContainer> */}
      <ResultsContainer></ResultsContainer>
    </div>
  );
}

export default App;
