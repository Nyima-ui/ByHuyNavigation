import "./App.css";
import Mobilenav from "./components/Mobilenav";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <Mobilenav />

      <div className="border max-w-[17rem] relative size-70">
        <p className="absolute bottom-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum
          doloribus provident tempora blanditiis deleniti possimus inventore
          repellat amet neque.
        </p>
      </div>
    </>
  );
}

export default App;
