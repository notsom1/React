import SideBar from "./components/SideBar";
import MainView from "./components/MainView";

function App() {
  return (
    <>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <div className="flex flex-row w-screen h-screen">
        <SideBar></SideBar>
        <MainView></MainView>
      </div>
    </>
  );
}

export default App;
