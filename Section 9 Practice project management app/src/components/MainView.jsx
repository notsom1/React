// import img from "../assets/no-projects.png";
// import Button from "./Button";
import CreateProjectView from "./CreateProjectView";
import HomeView from "./HomeView";

export default function MainView() {
  //   return <HomeView className="flex-grow flex flex-col"></HomeView>;
  return (
    <CreateProjectView className="flex-grow flex flex-col justify-center "></CreateProjectView>
  );
}
