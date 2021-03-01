import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';

function App() {
  const [counter, setcounter] = useState(0);
  return (
    <div className="App">
      <h1>This is a counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
        Increment
        </button>
        <button id="decrement-btn" onClick={() => setcounter(counter - 1)}>
        Decrement
        </button>
    </div>
  );
}

export default App;
