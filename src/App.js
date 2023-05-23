import './App.css';
import ErrorBoundery from './Componets/B-(26-43)/ErrorBoundery';
import Hero from './Componets/B-(26-43)/Hero';
import PortalDemo from './Componets/B-(26-43)/PortalDemo';




const App=()=> {
  return (
    <div className="App">
      <ErrorBoundery>

        <Hero heroName='poor' />

      </ErrorBoundery>
      
      <Hero heroName='you can achive that '/>
      <Hero heroName='You can save your self and your family more work meen fast leaving '/>

    </div>
  );
}

export default App;
