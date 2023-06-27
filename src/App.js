import { Routes,Route, Link } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import { Fragment } from "react";
import NavBar from "./Components/NavBar";
import OrderSummery from "./Components/OrderSummery";
import NoMatch from "./Components/NoMatch";
import Products from "./Components/Products";


const App=()=> {
  return (
    <>
      <NavBar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="About" element={<About/>}/>
        <Route path="OrderSummery" element={<OrderSummery/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>



      </div>
    </>
  );
}

export default App;
