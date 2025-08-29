export default function QuizButton({ className, buttonColor, children }) {
  return (
    <button
      className={`w-full rounded-full text-xl py-3 ${className} ${buttonColor}`}
    >
      {children}
    </button>
  );
}
