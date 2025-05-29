import "./App.css";
import Mobilenav from "./components/Mobilenav";
import Nav from "./components/nav";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function App() {
  const secondSectionRef = useRef(null);
  const isInView = useInView(secondSectionRef, {margin : "0px 0px -100% 0px", once : false}); 
  return (
    <>
      <Nav />
      <Mobilenav isInView={isInView} />
      <section className="h-screen w-screen bg-lime-200"></section>
      <section className="h-screen w-screen bg-zinc-500" ref={secondSectionRef}></section>
      <section className="h-screen w-screen bg-amber-200"></section>
    </>
  );
}

export default App;
