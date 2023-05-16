import logo from './logo.svg';
import './App.css';
import SayHello from './Componets/Greet';
import Welcome from './Componets/Welcom';
import Hello from './Componets/Hello';

const App=()=> {
  return (
    <div className="App">
      <SayHello />
      <Welcome />
      <Hello/>

    </div>
  );
}

export default App;
