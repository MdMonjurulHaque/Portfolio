import React from "react";
import About from "./Components/About";
import Intro from "./Components/Intro";
import Skill from "./Components/Skill";
import Project from "./Components/Project";

const App = () => {
  return (
    <div className=" bg-slate-100 text-gray-600 w-[90%] m-auto p-5">
      <Intro />
      <About />
      <Skill />
      <Project />
    </div>
  );
};

export default App;
