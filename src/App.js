import React, {useState} from 'react';
import './App.css';

export default function App() {
  const hello = "Hello ";
  const [world, setWorld] = useState("World");

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {hello + world}
        </p>
        <input
          type="text"
          value={world} 
          onChange={event => setWorld(event.target.value)} 
          className="input" 
        />
      </header>
    </div>
  );
};
