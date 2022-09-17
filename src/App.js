import "./Styles/App.css";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Components/Home";

import Projects from "./Components/Projects";
import ContactSection from "./Components/ContactSection";
import NavMenu from "./Components/NavMenu";
import Resume from "./Components/Resume"
import { AnimatePresence } from "framer-motion";

function App() {
  const fadeLeft = {
    hidden:{
      opacity:0,
      x:'-100'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:2,
      }
    }
    
  }
  return (
    <div className="App">
      <NavMenu />
      
        <Routes>
          <Route className="menu-item" path="/" element={<Home fadeLeft = {fadeLeft} />}></Route>
          <Route
            
            path="/projects"
            element={<Projects />}
          ></Route>
          <Route
            
            path="/contact"
            element={<ContactSection fadeLeft = {fadeLeft} />}
          ></Route>
          <Route
            
            path="/Resume"
            element={<Resume fadeLeft = {fadeLeft} />}
          ></Route>
        </Routes>
    
    </div>
  );
}

export default App;
