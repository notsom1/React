import logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <img src={logo} alt="quiz header image" className="w-12"></img>
      <h1 className="tracking-widest text-4xl font-bold pt-6 text-rose-400">
        REACT QUIZ
      </h1>
    </header>
  );
}
