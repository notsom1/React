export default function TextButton({
  textColor = "text-gray-950 hover:text-gray-400",
  className,
  textSize = "text-xl",
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-lg ${textSize} ${textColor} ${className}`}
    >
      {children}
    </button>
  );
}
