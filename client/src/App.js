import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Presentation from './Component/Presentation';
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import langueContext from './context/LangueContext';
import { useState } from "react";

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
