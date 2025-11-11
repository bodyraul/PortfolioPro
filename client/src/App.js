import Project from "./Component/projet/Project";
import Skills from "./Component/skills/Skills";
import Presentation from "./Component/presentation/Presentation"
import Navbar from "./Component/nav/Navbar";
import About from "./Component/about/About";
import langueContext from './context/LangueContext';
import { useState } from "react";
import "./index.css"

function App() {
  const [langue, setlangue] = useState("anglais");
  const valueLangueContext ={
    langue:langue,
    setlangue:setlangue
  }
  return (
    <div >
      <langueContext.Provider value={valueLangueContext}>
        <Navbar/>
        <Presentation></Presentation>
        <About/>
        <Project></Project>
        <Skills></Skills>
      </langueContext.Provider>
    </div>
  );
}

export default App;
