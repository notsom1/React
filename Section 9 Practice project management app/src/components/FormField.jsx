import Input from "./Input";

export default function FormField({ inputType, children }) {
  const labelStyle = "text-zinc-600 font-bold";

  return (
    <>
      <br></br>
      <label className={labelStyle}>{children}</label>
      <Input inputType={inputType} className="mt-1"></Input>
    </>
  );
}
