import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

import RootLayOuts from "./layouts/RootLayOuts";
import HelpLayOut from "./layouts/HelpLayOut";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayOuts />}>
    
    <Route index element={<Home />} />
    
    <Route path="about" element={<About />} />
    
    <Route path="help" element={<HelpLayOut />}>
      <Route path="faq" element={<Faq/>} />
      <Route path="contact" element={<Contact/>}/>
    </Route>
    
  </Route> 
));
  
const App=()=> {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
