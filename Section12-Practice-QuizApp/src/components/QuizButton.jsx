export default function QuizButton({
  className,
  buttonColor,
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-full text-xl py-3 ${className} ${buttonColor}`}
    >
      {children}
    </button>
  );
}
