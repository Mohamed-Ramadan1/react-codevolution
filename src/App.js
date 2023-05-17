import logo from './logo.svg';
import './App.css';
import SayHello from './Componets/Greet';
import Welcome from './Componets/Welcom';
import Hello from './Componets/Hello';
import Massage from './Componets/Massage';
import Counter from './Componets/Counter';
import ChangeValue from './Componets/Setstae';

const App=()=> {
  return (
    <div className="App">
      {/* <SayHello name="Mohamed" >
        <h2>You are so good</h2>
      </SayHello>
      <Welcome />
      <Hello />
      <Massage />
      <Counter/> */}
      <ChangeValue/>

    </div>
  );
}

export default App;
