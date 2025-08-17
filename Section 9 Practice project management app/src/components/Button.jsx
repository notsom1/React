export default function Button({
  bgcolor = "bg-gray-700 hover:bg-gray-600",
  textColor = "text-gray-400 hover:text-white",
  className,
  children,
}) {
  return (
    <button
      className={`px-4 py-3 rounded-lg text-xl ${bgcolor} ${textColor} ${className}`}
    >
      {children}
    </button>
  );
}
