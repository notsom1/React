// import img from "../assets/no-projects.png";
// import Button from "./Button";
import { useState } from "react";
import CreateProjectView from "./CreateProjectView";
import HomeView from "./HomeView";
import ProjectView from "./ProjectView";

export default function MainView({
  addProject,
  addTask,
  deleteProject,
  setView,
  currentView,
  project,
  removeTask,
}) {
  return (
    <>
      {currentView === "Home" && (
        <HomeView
          setView={setView}
          className="flex-grow flex flex-col justify-center"
        ></HomeView>
      )}
      {currentView === "CreateProject" && (
        <CreateProjectView
          setView={setView}
          addProject={addProject}
          className="flex-grow flex flex-col justify-center "
        ></CreateProjectView>
      )}
      {currentView === "Project" && (
        <ProjectView
          deleteProject={deleteProject}
          removeTask={removeTask}
          project={project}
          addTask={addTask}
          setView={setView}
          className="flex-grow flex flex-col justify-center "
        ></ProjectView>
      )}
    </>
  );
}
