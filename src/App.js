import logo from './logo.svg';
import './App.css';
import State from './component/State';
import Forms from './component/Forms';
import Mycomponents from './component/Mycomponent';
import ListTodo from './Todos/ListTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ListTodo />
      </header>

    </div>
  );
}

export default App;
