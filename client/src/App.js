import Contact from "./Component/Contact";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Presentation from './Component/Presentation';
import Navbar from "./Component/Navbar";
import About from "./Component/About";

function App() {
  return (
    <div >
      <Navbar/>
      <Presentation></Presentation>
      <About/>
      <Project></Project>
      <Skills></Skills>
    </div>
  );
}

export default App;
