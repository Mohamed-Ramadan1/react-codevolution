import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import { Fragment } from "react";


const App=()=> {
  return (
    <div className="App">
    
      <Fragment>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="about" element={ <About/>} />
        </Routes>
      </Fragment>
    </div>
  
  );
}

export default App;
