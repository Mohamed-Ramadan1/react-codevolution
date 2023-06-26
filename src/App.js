import { Routes,Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";


const App=()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>



    </div>
  );
}

export default App;
