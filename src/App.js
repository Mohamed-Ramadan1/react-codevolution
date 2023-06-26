import { Routes,Route, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import { Fragment } from "react";
import NavBar from "./Components/NavBar";


const App=()=> {
  return (
    <>
      <NavBar/>.3
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="About" element={<About/>}/>
      </Routes>



      </div>
    </>
  );
}

export default App;
