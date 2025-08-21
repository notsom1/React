export default function Input({
  inputType,
  className,
  ref,
  required = false,
  defaultValue,
}) {
  const inputStyle =
    "bg-zinc-200 text-lg px-3 py-1 outline-none border-b-2 border-gray-300 focus:border-gray-800 ";
  return (
    <input
      required={required}
      ref={ref}
      type={inputType}
      defaultValue={defaultValue}
      className={`${inputStyle} ${className}`}
    ></input>
  );
}
