import { Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import { Fragment } from "react";
import OrderSummdry from "./Components/OrderSummry";
import Nomatch from "./Components/Nomatch";
import Product from "./Components/Product";
import New from "./Components/New"; 
import Featured from "./Components/Featured";
import Users from "./Components/Users";
import UserInformation from "./Components/UserInformation";
const App=()=> {
  return (
    <div className="App">
    
      <Fragment>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="about" element={ <About/>} />
          <Route path="OrderSummry" element={<OrderSummdry />} />
          
          <Route   path="Product" element={<Product />} >
            <Route path="new" element={ <New/>} />
            <Route path="featured" element={ <Featured/>} />
          </Route>

          <Route path="/user" element={ <Users/>}>
            <Route path=":userId" element={<UserInformation />} />
          </Route>
          
          <Route path="*" element={ <Nomatch/>} />
        </Routes>
      </Fragment>
    </div>
  
  );
}

export default App;
