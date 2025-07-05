import React, { useState } from 'react';
import './App.css';

function App() {
  const [rctTitle, setRctTitle] = useState('React Title');
  const [rctUpdates, setRctUpdates] = useState(0);

  if (!window.jsUpdates) {
    window.jsUpdates = 0;
  }

  const updateJsTitle = () => {
    const jsTitle = document.getElementById('js-title');
    if (jsTitle) {
      window.jsUpdates += 1;
      jsTitle.textContent = `VanillaJS Title (${window.jsUpdates})`;
    }
  };

  const updateRctTitle = () => {
    setRctTitle(prev => `React Title (${rctUpdates + 1})`);
    setRctUpdates(prev => prev + 1);
  };

  return (
    <div className="App">
      <h1 id="js-title">Vanilla Title</h1>
      <h1>{rctTitle}</h1>

      <div className="buttons">
        <button onClick={updateJsTitle}>Change Title (Vanilla JS)</button>
        <p>Vanilla DOM Updates: {window.jsUpdates}</p>

        <button onClick={updateRctTitle}>Change Title (React)</button>
        <p>React DOM Updates: {rctUpdates}</p>
      </div>
    </div>
  );
}

export default App;
