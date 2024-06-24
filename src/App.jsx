
import {useState,useEffect} from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Project from "./Components/Project"
import Contact from "./Components/Contact";
function App() {
  const [mobileView, setMobile] = useState(window.innerWidth <= 768);


  useEffect (() => {
    const resize = () => {
      setMobile(window.innerWidth <= 768);
    }
    resize();
    window.addEventListener('resize',resize);
    return () => window.removeEventListener('resize',resize)
  })

  return (  
    <>
    <Nav />
      <Hero/>
      <Project mobile = {mobileView} />
      <Contact />
    </>
  );
}

export default App;
