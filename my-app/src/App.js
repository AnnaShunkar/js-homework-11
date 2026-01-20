import FunctionComponent from './FunctionComponent';
import ClassComponent from "./ClassComponent";
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          {<FunctionComponent />}
        <ClassComponent/>;
      </header>
    </div>
  );
}

export default App;
