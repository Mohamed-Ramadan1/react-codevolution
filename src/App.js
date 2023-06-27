import { Routes,Route, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import { Fragment } from "react";
import NavBar from "./Components/NavBar";
import OrderSummery from "./Components/OrderSummery";


const App=()=> {
  return (
    <>
      <NavBar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="About" element={<About/>}/>
        <Route path="OrderSummery" element={<OrderSummery/>}/>
      </Routes>



      </div>
    </>
  );
}

export default App;
