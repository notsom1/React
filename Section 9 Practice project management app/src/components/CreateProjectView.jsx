import Button from "./Button";
import TextButton from "./TextButton";

export default function CreateProjectView({ className }) {
  const labelStyle = "text-zinc-600 font-bold";
  return (
    <div className={`${className} ml-6 mr-60`}>
      <div className="flex justify-end gap-1">
        <TextButton>Cancel</TextButton>
        <Button>Save</Button>
      </div>

      <form className="flex flex-col">
        <label className={labelStyle}>TITLE</label>
        <input
          type="text"
          className="bg-zinc-300 text-lg px-3 py-1 border-b-2 border-gray-500"
        ></input>
        <label className={labelStyle}>DESCRIPTION</label>
        <input type="text" className=""></input>
        <label className={labelStyle}>DUE DATE</label>
        <input type="date"></input>
      </form>
    </div>
  );
}
