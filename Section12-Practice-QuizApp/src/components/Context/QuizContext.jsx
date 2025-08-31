import { createContext, useState, useRef, useEffect } from "react";
import questions from "../../questionsData";

export const QuizContext = createContext({
  isHomePage: true,
  quizStarted: false,
  currentQuestion: 0,
  isCorrect: null,
  pickedAnswer: null,
  totalQuestion: 7,
  score: {
    correct: 0,
    wrong: 0,
    skipped: 0,
  },
  checkAnswer: () => {},
  nextQuestion: () => {},
  startQuiz: () => {},
  initialTime: 10000,
  choices: [],
  startTimer: false,
  startedTimer: () => {},
});

export default function QuizContextProvider({ children }) {
  const questionTime = 5000;
  const answeredTime = 2000;

  const [isHomePage, setIsHomePage] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [pickedAnswer, setPickedAnswer] = useState();
  const [initialTime, setInitialTime] = useState(questionTime);
  const [startTimer, setStartTimer] = useState(true);
  const [score, setScore] = useState({
    correct: 0,
    wrong: 0,
    skipped: 0,
  });

  let randomAnswers = useRef();

  if (!randomAnswers.current) {
    generateChoices();
  }

  function generateChoices(next) {
    const index = next ? currentQuestion + 1 : currentQuestion;
    const answers = questions[index].answers;
    randomAnswers.current = shuffleArray([...answers]);
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function checkAnswer(answer, i) {
    const current = questions[currentQuestion];

    if (answer === current.answers[current.correctAnswer]) {
      setIsCorrect(true);
      setScore((prev) => {
        return {
          ...prev,
          correct: prev.correct + 1,
        };
      });
    } else {
      setIsCorrect(false);
      setScore((prev) => {
        return {
          ...prev,
          wrong: prev.wrong + 1,
        };
      });
    }
    setPickedAnswer(i);
    setInitialTime(answeredTime);
    console.log(score);
  }

  function nextQuestion() {
    if (!pickedAnswer) {
      setScore((prev) => {
        return {
          ...prev,
          skipped: prev.skipped + 1,
        };
      });
    }
    setPickedAnswer();
    setIsCorrect();

    if (currentQuestion === questions.length - 1) {
      console.log("done");
    } else {
      generateChoices(true);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
    setInitialTime(questionTime);
    setStartTimer(true);
  }

  const quizContext = {
    isHomePage: isHomePage,
    quizStarted: quizStarted,
    currentQuestion: currentQuestion,
    isCorrect: isCorrect,
    pickedAnswer: pickedAnswer,
    totalQuestions: questions.length,
    score: score,
    checkAnswer: checkAnswer,
    nextQuestion: nextQuestion,
    startQuiz: () => setQuizStarted(true),
    startedTimer: () => setStartTimer(false),
    initialTime: initialTime,
    choices: randomAnswers.current,
    startTimer: startTimer,
  };

  return <QuizContext value={quizContext}>{children}</QuizContext>;
}
