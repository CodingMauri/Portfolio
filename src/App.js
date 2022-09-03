import Nav from './Components/Nav';
import Hero from './Components/Hero';
import './Styles/App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
function App() {
  return (
 <Routes>

  
    <Route path ="/" element = {<Home />}></Route>
 </Routes>
  );
}

export default App;
