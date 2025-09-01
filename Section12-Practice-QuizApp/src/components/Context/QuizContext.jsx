import { createContext, useState, useRef, useEffect } from "react";
import questions from "../../questionsData";

export const QuizContext = createContext({
  isHomePage: true,
  quizStarted: false,
  currentQuestion: 0,
  isCorrect: null,
  pickedAnswer: null,
  totalQuestions: 7,
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
  answersArray: [],
});

export default function QuizContextProvider({ children }) {
  const questionTime = 5000;
  const answeredTime = 500;

  const [isHomePage, setIsHomePage] = useState(true);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState();
  const [pickedAnswer, setPickedAnswer] = useState();
  const [initialTime, setInitialTime] = useState(questionTime);
  const [startTimer, setStartTimer] = useState(true);
  const [answerArray, setAnswerArray] = useState([]);
  const [score, setScore] = useState({
    correct: 0,
    wrong: 0,
    skipped: 0,
  });

  function showResults() {
    setIsHomePage(false);
    setQuizStarted(false);
    setCurrentQuestion(0);
    setIsCorrect();
    setPickedAnswer();
    setInitialTime(questionTime);
  }

  // let initialTime = useRef();
  let randomAnswers = useRef();
  // initialTime.current = questionTime;

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
    setAnswerArray((prev) => {
      const newArray = [...prev];
      newArray.push(answer);
      console.log(newArray);
      return newArray;
    });
    setPickedAnswer(i);
    setInitialTime(answeredTime);
    // initialTime.current = answeredTime;

    setStartTimer((prev) => !prev);
    console.log(score);
  }

  function nextQuestion() {
    if (pickedAnswer === undefined) {
      console.log("i picked nothing: " + pickedAnswer);
      setScore((prev) => {
        return {
          ...prev,
          skipped: prev.skipped + 1,
        };
      });
      setAnswerArray((prev) => {
        const newArray = [...prev];
        newArray.push(null);
        console.log(newArray);
        return newArray;
      });
    }

    setPickedAnswer();
    setIsCorrect();

    if (currentQuestion === questions.length - 1) {
      showResults();
    } else {
      generateChoices(true);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
    setInitialTime(questionTime);
    // initialTime.current = questionTime;
    setStartTimer((prevStart) => !prevStart);
  }

  function startQuiz() {
    setQuizStarted(true);
    setAnswerArray([]);
    setScore({
      wrong: 0,
      correct: 0,
      skipped: 0,
    });
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
    startQuiz: startQuiz,
    initialTime: initialTime,
    choices: randomAnswers.current,
    startTimer: startTimer,
    answersArray: answerArray,
  };

  return <QuizContext value={quizContext}>{children}</QuizContext>;
}
