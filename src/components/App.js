import "../styles/App.css";
import { Cities } from "./Cities";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <h1>Lista stolic:</h1>
      <Cities />
      <Counter />
    </div>
  );
}

export default App;
