import Contact from "./Component/Contact";
import Project from "./Component/Project";
import Skills from "./Component/Skills";
import Presentation from './Component/Presentation';
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div >
      <Navbar/>
      <Presentation></Presentation>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
