export default function TextButton({
  textColor = "text-gray-950 hover:text-gray-400",
  className,
  children,
}) {
  return (
    <button
      className={`px-4 py-3 rounded-lg text-xl ${textColor} ${className}`}
    >
      {children}
    </button>
  );
}
