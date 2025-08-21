import Button from "./Button";

export default function SideBar({
  className,
  projects,
  setView,
  selectProject,
}) {
  function addProject() {
    setView("CreateProject");
  }
  function goToProject(project) {
    selectProject(project);
  }
  return (
    <div
      className={"mt-12 bg-slate-900 rounded-tr-3xl h-full basis-2/5 max-w-md "}
    >
      <div className="flex flex-col mx-7">
        <h1 className="text-3xl text-white mt-24 ">YOUR PROJECTS</h1>
        <Button
          onClick={addProject}
          bgcolor="bg-zinc-800 hover:bg-zinc-700"
          className="mt-14 w-fit"
        >
          + Add Project
        </Button>
        {projects.map((project) => (
          <button
            onClick={() => selectProject(project)}
            key={project.title}
            className="hover:bg-zinc-800 focus:bg-zinc-700 mt-8 py-1 px-2"
          >
            <h2 className="text-2xl text-gray-400 text-start">
              {project.title}
            </h2>
          </button>
        ))}
      </div>
    </div>
  );
}
