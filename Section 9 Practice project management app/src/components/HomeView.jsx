import img from "../assets/no-projects.png";
import Button from "./Button";
export default function HomeView({ className }) {
  return (
    <div className={`items-center ${className}`}>
      <img src={img} className="h-32 w-fit"></img>
      <h1 className="text-3xl text-gray-500 mt-12 font-bold">
        No Project Selected
      </h1>
      <h2 className="text-2xl text-gray-400 mt-8">
        Select a project or get started with a new one
      </h2>
      <Button className="mt-14">Create new project</Button>
    </div>
  );
}
