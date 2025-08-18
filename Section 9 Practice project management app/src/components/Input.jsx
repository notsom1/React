export default function Input({ inputType, className }) {
  const inputStyle =
    "bg-zinc-200 text-lg px-3 py-1 outline-none border-b-2 border-gray-300 focus:border-gray-800";
  return (
    <input type={inputType} className={`${inputStyle} ${className}`}></input>
  );
}
