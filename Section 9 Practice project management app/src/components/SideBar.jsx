import Button from "./Button";

export default function SideBar({ className }) {
  return (
    <div
      className={"mt-12 bg-slate-900 rounded-tr-3xl h-full basis-2/5 max-w-md "}
    >
      <div className="flex flex-col mx-7">
        <h1 className="text-3xl text-white mt-24 ">YOUR PROJECTS</h1>
        <Button bgcolor="bg-zinc-800 hover:bg-zinc-700" className="mt-14 w-fit">
          + Add Project
        </Button>
      </div>
    </div>
  );
}
