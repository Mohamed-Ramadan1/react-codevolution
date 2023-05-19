import logo from './logo.svg';
import './App.css';
import SayHello from './Componets/Greet';
import Welcome from './Componets/Welcom';
import Hello from './Componets/Hello';
import Massage from './Componets/Massage';
import Counter from './Componets/Counter';
import ChangeValue from './Componets/Setstae';
import FunctionClick from './Componets/FunctionClick';
import ClassClicked from './Componets/ClassClicked';
import MassageBinding from './Componets/MassageComponent';
import ParentComponent from './Componets/ParentComponent';
import UserGreating from './Componets/UserGreating';
import NameList from './Componets/NameList';
import StyleCheet from './Componets/StyleCheet';
import Inline from './Componets/Inline';

const App=()=> {
  return (
    <div className="App">
    {/* <SayHello name="Mohamed" >
      <h2>You are so good</h2>
    </SayHello>
    <Welcome />
    <Hello />
    <Massage />
    <Counter/>
    <ChangeValue/>
    <SayHello name="Mohamed" heroName="Wonder Woman"/>
    <Welcome name="Mohamed" heroName="Omare Ebn Elkhtap" />
    <FunctionClick/>
    <ClassClicked/>
    <MassageBinding/>
    <ParentComponent/>
      <UserGreating/>
      <NameList/>
      <StyleCheet /> */}
      <Inline/>

    </div>
  );
}

export default App;
