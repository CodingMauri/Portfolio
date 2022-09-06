import "./Styles/App.css";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
