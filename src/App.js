import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NoteFound from "./pages/NoteFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers from './pages/careers/Careers'
import { careersLoader } from "./pages/careers/Careers";

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

      <Route path="careers" element={<CareersLayout />}>
      <Route 
        index 
        element={<Careers />} 
        loader={careersLoader} 
      />
    </Route>
    <Route path="*" element={<NoteFound />} />
    
  </Route> 
));


const App=()=> {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
