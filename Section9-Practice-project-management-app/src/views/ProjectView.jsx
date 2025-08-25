import Input from "../components/Input";
import TextButton from "../components/TextButton";
import { useRef, useState } from "react";

export default function ProjectView({
  project,
  className,
  setView,
  deleteProject,
  addTask,
  removeTask,
}) {
  const taskName = useRef();
  function onDelete() {
    deleteProject(project);
    setView("Home");
  }

  function onAdd() {
    addTask(project, taskName.current.value);
    taskName.current.value = "";
  }

  function onRemove(task) {
    removeTask(project, task);
  }
  console.log("hello there peopel");
  return (
    <div className={`${className} ml-6 xl:mr-60 mr-20`}>
      <div className="flex">
        <h1 className="text-3xl text-gray-500 font-bold flex-grow">
          {project.title}
        </h1>
        <TextButton onClick={onDelete}>Delete</TextButton>
      </div>
      <h3 className="text-xl text-gray-400">{project.date}</h3>
      <br></br>
      <p>{project.description}</p>
      <hr className="my-6 border-2 border-zinc-300 "></hr>
      <h1 className="text-3xl text-gray-600 font-bold ">Tasks</h1>
      <div className="flex gap-2 items-center my-4">
        <Input inputType="text" ref={taskName}></Input>
        <TextButton onClick={onAdd}>Add Task</TextButton>
      </div>
      {project.tasks && project.tasks.length > 0 ? (
        <div className="bg-zinc-200 rounded-md px-4 py-2">
          {project.tasks.map((task) => (
            <div key={task} className="flex items-center">
              <h2 className="flex-grow text-xl">{task}</h2>
              <TextButton onClick={() => onRemove(task)}>Clear</TextButton>
            </div>
          ))}
        </div>
      ) : (
        <p>This project does not have any tasks yet.</p>
      )}
    </div>
  );
}
