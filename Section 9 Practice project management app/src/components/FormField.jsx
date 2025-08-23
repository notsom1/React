import Input from "./Input";

export default function FormField({
  inputType,
  children,
  ref,
  required,
  defaultValue,
}) {
  const labelStyle = "text-zinc-600 font-bold";

  return (
    <>
      <br></br>
      <label className={labelStyle}>{children}</label>
      <Input
        required={required}
        ref={ref}
        inputType={inputType}
        defaultValue={defaultValue}
        className="mt-1"
      ></Input>
    </>
  );
}
