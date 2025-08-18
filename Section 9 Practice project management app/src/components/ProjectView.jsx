import Input from "./Input";
import TextButton from "./TextButton";

export default function ProjectView({ className }) {
  return (
    <div className={`${className} ml-6  xl:mr-60 mr-20`}>
      <div className="flex">
        <h1 className="text-3xl text-gray-500 font-bold flex-grow">
          Learning React
        </h1>
        <TextButton>Delete</TextButton>
      </div>
      <h3 className="text-xl text-gray-400">Dec 29, 2024</h3>
      <br></br>
      <p>Learn React from the group up.</p>
      <br></br>
      <p className="divide-x-4 divide-solid divide-black">
        Start with the basics, finish with advanced knowledge.
      </p>
      <hr className="my-6 border-2 border-zinc-300 "></hr>
      <h1 className="text-3xl text-gray-600 font-bold ">Tasks</h1>
      <div className="flex gap-2 items-center my-4">
        <Input></Input>
        <TextButton>Add Task</TextButton>
      </div>
      <p>This project does not have any tasks yet.</p>
    </div>
  );
}
