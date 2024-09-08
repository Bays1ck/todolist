 
import './App.css';
import Todo from './components/todo';
import Author from "./components/author"

function App() {
  return (
    <div className="App">
      <h1>
        Todo list
      </h1>
      <Todo/>
      <h1>
        <Author/>
      </h1>
    </div>
  );
}

export default App;
