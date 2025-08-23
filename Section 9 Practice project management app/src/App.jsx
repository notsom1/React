import { useState } from "react";
import SideBar from "./components/SideBar";
import MainView from "./views/MainView";

function App() {
  const [projects, setProjects] = useState([]);
  const [currentView, setCurrentView] = useState("Home");
  const [selectedProject, setSelectedProjects] = useState();

  function setView(view) {
    setCurrentView(view);
  }
  function selectProject(project) {
    setSelectedProjects(project);
    setView("Project");
  }

  function addProject(project) {
    setProjects((prev) => {
      const newProjects = JSON.parse(JSON.stringify(prev));
      newProjects.push(project);
      return newProjects;
    });
  }

  function deleteProject(project) {
    setProjects((prev) => {
      const newProjects = prev.filter((p) => p.title !== project.title);
      return newProjects;
    });
  }

  function addTask(project, task) {
    setProjects((prev) => {
      const newProject = JSON.parse(JSON.stringify(project));
      newProject.tasks = [...newProject.tasks, task];

      const newProjects = prev.map((p) => {
        if (p.title === newProject.title) {
          return newProject;
        } else {
          return p;
        }
      });
      selectProject(newProject);
      return newProjects;
    });
  }
  function removeTask(project, task) {
    setProjects((prev) => {
      const newProject = JSON.parse(JSON.stringify(project));

      const newTasks = newProject.tasks.filter((t) => t !== task);

      newProject.tasks = newTasks;

      const newProjects = prev.map((p) => {
        if (p.title === newProject.title) {
          return newProject;
        } else {
          return p;
        }
      });
      selectProject(newProject);
      return newProjects;
    });
  }
  return (
    <>
      <div className="flex flex-row w-screen h-screen">
        <SideBar
          selectProject={selectProject}
          setView={setView}
          projects={projects}
        ></SideBar>
        <MainView
          project={selectedProject}
          currentView={currentView}
          setView={setView}
          addProject={addProject}
          addTask={addTask}
          removeTask={removeTask}
          deleteProject={deleteProject}
        ></MainView>
      </div>
    </>
  );
}

export default App;
