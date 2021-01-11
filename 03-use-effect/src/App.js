import React, { useState } from 'react';
import Clicker from './Clicker';

function App() {
  const [isClickerVisible, setIsClickerVisible] = useState(false);

  return (
    <div className="App">
      <h1>App</h1>

      <button
        onClick={() => {
          console.log('-----------------------------------');
          setIsClickerVisible(!isClickerVisible);
        }}
      >
        {isClickerVisible ? 'hide Clicker' : 'show Clicker'}
      </button>

      {isClickerVisible && <Clicker />}
    </div>
  );
}

export default App;
